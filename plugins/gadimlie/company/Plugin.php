<?php namespace Gadimlie\Company;

use Backend;
use System\Classes\PluginBase;

/**
 * company Plugin Information File
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
            'name'        => 'Company information',
            'description' => 'Company information described here',
            'author'      => 'gadimlie',
            'icon'        => 'icon-building-o'
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

    public function registerSettings()
    {
        return [
            'company' => [
                'label' => 'Company information',
                'description' => '',
                'category' => 'Gadimlie Studio əlavələri',
                'icon' => 'icon-building-o',
                'class' => 'Gadimlie\Company\Models\Company',
                'order' => 100
            ],
        ];
    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return [
            'Gadimlie\Company\Components\Company' => 'company',
            'Gadimlie\Company\Components\SubmitContactForm' => 'SubmitContactForm',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        return [
            'gadimlie.company.some_permission' => [
                'tab' => 'company',
                'label' => 'Some permission'
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
        return []; // Remove this line to activate

        return [
            'company' => [
                'label'       => 'company',
                'url'         => Backend::url('gadimlie/company/mycontroller'),
                'icon'        => 'icon-leaf',
                'permissions' => ['gadimlie.company.*'],
                'order'       => 500,
            ],
        ];
    }
}
