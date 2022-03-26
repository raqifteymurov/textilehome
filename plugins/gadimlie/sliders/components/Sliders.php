<?php namespace Gadimlie\Sliders\Components;

use Cms\Classes\ComponentBase;
use Gadimlie\Sliders\Models\Sliders as Settings;
use October\Rain\Database\Model;

class Sliders extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Əsas səhifə üçün slayderlər',
            'description' => '',
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onRun()
    {
        $settings = Settings::instance();
        $sliders = new Model();
        $sliders->slider = $settings->slider;

 
         $this->page['sliders'] = $sliders;
    }
}
