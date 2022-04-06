<?php namespace Vadim\Testimonials\Components;

use Cms\Classes\ComponentBase;
use Vadim\Testimonials\Models\Testimonial as TestimonialModel;
use October\Rain\Support\Facades\Flash;
use Input;
use Validator;
use VAdim\Images\Models\Image as ImageModel;


/**
 * Testimonials Component
 */
class Testimonials extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'TestimonialsForm Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [
            'thanksMessage' => [
                'title'       => 'Thanks Message',
                'description' => 'Thanks message for new subscribers',
                'type' => 'string',
                'default'     => 'Thanks for your opinion!'
            ],
            'errorMessage' => [
                'title'       => 'Error Message',
                'description' => 'Message for error thown',
                'type' => 'string',
                'default'     => 'Email already exists!'
            ]
        ];
    }

    public function onSave(){
        $model=new ImageModel();
        $image=$model->select('img')->get();
        $image=$image->random();
        $img=$image['img'];
        

        $validation = Validator::make(
            $form = Input::all(), [
                'name' => 'required',
                'testimonial' => 'required',
            ], 
        );
        if ($validation->fails()){
            Flash::error($validation->errors()->first());
        }
        else{
            $data = ['name' => post('name'), 'testimonial' => post('testimonial'), 'img' => $img];
            TestimonialModel::create($data);
            Flash::success($this->property('thanksMessage'));
            return \Redirect::refresh();
        }
           
    }


}
