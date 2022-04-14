<?php namespace Vadim\Goods;

use Backend;
use System\Classes\PluginBase;
use Vadim\Goods\Models\Category;

/**
 * goods Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'Goods',
            'description' => 'No description provided yet...',
            'author'      => 'vadim',
            'icon'        => 'icon-leaf'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {
        
    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
       // return []; // Remove this line to activate

        return [
            'Vadim\Goods\Components\Products' => 'Products',
            'Vadim\Goods\Components\Categories' => 'Categories',
            'Vadim\Goods\Components\SingleProduct' => 'SingleProduct',
            'Vadim\Goods\Components\SingleCategory' => 'SingleCategory'
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        //return []; // Remove this line to activate

        return [
            'vadim.goods.access_product' => [
                'tab' => 'goods',
                'label' => 'Product'
            ],
            'vadim.goods.access_categories' => [
                'tab' => 'goods',
                'label' => 'Categories'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        //return []; // Remove this line to activate

        return [
            'goods' => [
                'label'       => 'Goods',
                'url'         => Backend::url('vadim/goods/products'),
                'icon'        => 'icon-shopping-cart',
                'permissions' => ['vadim.goods.*'],
                'order'       => 500,
                'sideMenu' => [
                    'new_product' => [
                        'label'       => 'New product',
                        'icon'        => 'icon-plus',
                        'url'         => Backend::url('vadim/goods/products/create'),
                        'permissions' => ['vadim.goods.access_product']
                    ],
                    'products' => [
                        'label'       => 'Products',
                        'icon'        => 'icon-copy',
                        'url'         => Backend::url('vadim/goods/products'),
                        'permissions' => ['vadim.goods.access_product']
                    ],
                    'categories' => [
                        'label'       => 'Categories',
                        'icon'        => 'icon-list-ul',
                        'url'         => Backend::url('vadim/goods/categories'),
                        'permissions' => ['vadim.goods.access_categories']
                    ]
                ]
            ],
        ];
    }
}
