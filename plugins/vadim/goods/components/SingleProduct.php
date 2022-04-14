<?php namespace Vadim\Goods\Components;

use Cms\Classes\ComponentBase;
use Vadim\Goods\Models\Product;

/**
 * SingleProduct Component
 */
class SingleProduct extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'singleProduct Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [
            'slug' => [
                'title'       => 'Slug',
                'description' => '',
                'default'     => '{{ :slug }}',
                'type'        => 'string',
            ],
        ];
    }

    public function onRun()
    {
        $slug = $this->property('slug');
        $product = Product::where('slug', $slug)->first();
        $this->page['product'] = $product;
    }
}
