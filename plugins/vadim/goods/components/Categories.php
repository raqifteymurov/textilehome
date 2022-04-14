<?php namespace Vadim\Goods\Components;

use Cms\Classes\ComponentBase;
use Vadim\Goods\Models\Category;

/**
 * Categories Component
 */
class Categories extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Categories Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $category = Category::all();
        $this->page['category'] = $category;
    }
}
