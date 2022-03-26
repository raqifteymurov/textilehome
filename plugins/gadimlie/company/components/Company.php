<?php namespace Gadimlie\Company\Components;

use Cms\Classes\ComponentBase;
use Gadimlie\Company\Models\Company as Settings;
use October\Rain\Database\Model;

class Company extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Company details',
            'description' => ''
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onRun()
    {
        $settings = Settings::instance();
        $company = new Model();

        $company->name = $settings->name;
        $company->address = $settings->address;
        $company->slogan = $settings->slogan;
        $company->logo = $settings->logo;
        $company->light_logo = $settings->light_logo;
        $company->tel = $settings->tel;
        $company->email = $settings->email;
        $company->whatsapp = $settings->whatsapp;
        $company->socials = $settings->socials;
        $company->testimonials = $settings->testimonials;
        $company->rations_title = $settings->rations_title;
        $company->rations_subtitle = $settings->rations_subtitle;
        $company->rations_text = $settings->rations_text;
        $company->rations_img = $settings->rations_img;
        $company->fixed_img_title = $settings->fixed_img_title;
        $company->fixed_img_text = $settings->fixed_img_text;
        $company->fixed_img = $settings->fixed_img;







        $this->page['company'] = $company;
    }
}
