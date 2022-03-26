<?php namespace Gadimlie\Sliders\Models;

use Model;
/** *
*Sliders Model
 */
class sliders extends Model
{
    public $implement = [
      'System.Behaviors.SettingsModel',
      //'RainLab.Translate.Behaviors.TranslatableModel'
    ];

    public $translatable = [
    
  ];
    public $jsonable = [
      
      'slider'

    ];    

    public $settingsCode = 'gadimlie_sliders_settings';

    public $settingsFields = 'fields.yaml';

}