<?php namespace Cms\Twig;

use Twig\Source;
use Twig\Template;
use Twig\Node\Node;
use Twig\Compiler;
use Twig\Environment;
use Twig\Extension\SandboxExtension;
use Twig\Node\Expression\GetAttrExpression;
use Illuminate\Support\Collection;

/**
 * GetAttrNode compiles a custom get attribute node.
 * Carbon copy of the parent class with custom get attribute logic.
 */
class GetAttrNode extends GetAttrExpression
{
    /**
     * @inheritdoc
     */
    public function __construct(array $nodes = [], array $attributes = [], int $lineno = 0, string $tag = null)
    {
        // Skips parent::__construct()
        Node::__construct($nodes, $attributes, $lineno, $tag);
    }

    /**
     * @inheritdoc
     */
    public function compile(Compiler $compiler)
    {
        $env = $compiler->getEnvironment();

        // optimize array calls
        if (
            $this->getAttribute('optimizable')
            && (!$env->isStrictVariables() || $this->getAttribute('ignore_strict_check'))
            && !$this->getAttribute('is_defined_test')
            && Template::ARRAY_CALL === $this->getAttribute('type')
        ) {
            $var = '$'.$compiler->getVarName();
            $compiler
                ->raw('(('.$var.' = ')
                ->subcompile($this->getNode('node'))
                ->raw(') && is_array(')
                ->raw($var)
                ->raw(') || ')
                ->raw($var)
                ->raw(' instanceof ArrayAccess ? (')
                ->raw($var)
                ->raw('[')
                ->subcompile($this->getNode('attribute'))
                ->raw('] ?? null) : null)')
            ;

            return;
        }

        // Different from parent logic, call our custom customGetAttribute method
        $compiler->raw(static::class . '::customGetAttribute($this->env, $this->source, ');

        if ($this->getAttribute('ignore_strict_check')) {
            $this->getNode('node')->setAttribute('ignore_strict_check', true);
        }

        $compiler
            ->subcompile($this->getNode('node'))
            ->raw(', ')
            ->subcompile($this->getNode('attribute'))
        ;

        if ($this->hasNode('arguments')) {
            $compiler->raw(', ')->subcompile($this->getNode('arguments'));
        } else {
            $compiler->raw(', []');
        }

        $compiler->raw(', ')
            ->repr($this->getAttribute('type'))
            ->raw(', ')->repr($this->getAttribute('is_defined_test'))
            ->raw(', ')->repr($this->getAttribute('ignore_strict_check'))
            ->raw(', ')->repr($env->hasExtension(SandboxExtension::class))
            ->raw(', ')->repr($this->getNode('node')->getTemplateLine())
            ->raw(')')
        ;
    }

    /**
     * customGetAttribute inherits the logic of twig_get_attribute
     */
    public static function customGetAttribute(Environment $env, Source $source, $object, $item, array $arguments = [], $type = /* Template::ANY_CALL */ 'any', $isDefinedTest = false, $ignoreStrictCheck = false, $sandboxed = false, int $lineno = -1)
    {
        // This will basically block attribute calls from being converted to method calls
        // when dealing with October-flavored models.
        if ($type !== Template::METHOD_CALL) {
            if ($object instanceof \October\Rain\Halcyon\Model) {
                if ($isDefinedTest) {
                    return true;
                }

                if ($env->hasExtension(SandboxExtension::class)) {
                    $env->getExtension(SandboxExtension::class)->checkPropertyAllowed($object, $item);
                }

                return $object->$item;
            }

            if ($object instanceof \October\Rain\Database\Model) {
                if ($isDefinedTest) {
                    return true;
                }

                if ($env->hasExtension(SandboxExtension::class)) {
                    $env->getExtension(SandboxExtension::class)->checkPropertyAllowed($object, $item);
                }

                $value = $object->$item;

                // {% if model.relationAsCollection %}
                if ($object->hasRelation($item) && $value instanceof Collection) {
                    return $value->count() ? $value : [];
                }

                return $value;
            }
        }

        return \twig_get_attribute(
            $env,
            $source,
            $object,
            $item,
            $arguments,
            $type,
            $isDefinedTest,
            $ignoreStrictCheck,
            $sandboxed,
            $lineno
        );
    }
}
