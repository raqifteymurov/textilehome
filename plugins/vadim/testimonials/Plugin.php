<?php namespace Vadim\Testimonials;

use Backend;
use System\Classes\PluginBase;

/**
 * testimonials Plugin Information File
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
            'name'        => 'testimonials',
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
        //return []; // Remove this line to activate

        return [
            'Vadim\Testimonials\Components\Testimonials' => 'TestimonialsForm',
            'Vadim\Testimonials\Components\TestimonialsList' => 'TestimonialsList'
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
            'vadim.testimonials.some_permission' => [
                'tab' => 'testimonials',
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
        //return []; // Remove this line to activate

        return [
            'testimonials' => [
                'label'       => 'testimonials',
                'url'         => Backend::url('vadim/testimonials/Testimonials'),
                'icon'        => 'icon-leaf',
                'permissions' => ['vadim.testimonials.*'],
                'order'       => 500,
            ],
        ];
    }
}
