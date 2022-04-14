<?php namespace Vadim\Goods\Components;

use Cms\Classes\ComponentBase;
use Vadim\Goods\Models\Category;

/**
 * SingleCategory Component
 */
class SingleCategory extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'singleCategory Component',
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
        $category = Category::where('slug', $slug)->first();
        $this->page['category'] = $category;

    }
}
