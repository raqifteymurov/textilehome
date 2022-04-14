<?php namespace Vadim\Goods\Components;

use Cms\Classes\ComponentBase;
use Vadim\Goods\Models\Product as ProductModel;

/**
 * Products Component
 */
class Products extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Products Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onRun(){
        $product = ProductModel::all();
        $this->page['product'] = $product; 
        
    }
}
