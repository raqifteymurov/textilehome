<?php namespace Vadim\Testimonials\Components;

use Cms\Classes\ComponentBase;
use Vadim\Testimonials\Models\Testimonial as Test;

/**
 * TestimonialsList Component
 */
class TestimonialsList extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'TestimonialsList Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    
    public function onRun(){
        $testimonial = new Test();
        $data = $testimonial->all();
        $this->page['testimonials'] = $data;
    }
}
