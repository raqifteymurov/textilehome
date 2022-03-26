<?php namespace Gadimlie\Company\Components;

use Cms\Classes\ComponentBase;
use Validator;
use October\Rain\Exception\ValidationException;
use Input;
use Illuminate\Support\Facades\Mail;

class SubmitContactForm extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Submit Contact Form Component',
            'description' => 'Site contact form'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onSend()
    {
        $flash_message = [
            'status' => 200,
            'msg' => 'Okey'
        ];        
        if (stripos($_SERVER['REQUEST_URI'], 'index.htm')) {
                $validation = Validator::make(
                    Input::all(), [
                        'firstname' => 'required',
                        'surname' => 'required',
                        'email' => 'required',
                        'tel' => 'required',
                        'message' => 'required',
                    ]
                );
            
        } else {
            $validation = Validator::make(
            Input::all(), [
                        'firstname' => 'required',
                        'surrname' => 'required',
                        'email' => 'required',
                        'tel' => 'required',
                        'message' => 'required',
                ]
            );
        }


        if ($validation->fails()) {
            return $flash_message = [
                'status' => 406,
                'msg'  => $validation->errors()->first()
            ];
        } else {
            $params = Input::all();
            Mail::send('ContactForm', $params, function($message) use ($params) {
                $message->to('subayev@gadimlie.com');
                $message->subject('Veb saytdan yeni məktub');
            });
        }

        return $flash_message = [
            'status' => 200,
            'msg'  => 'Message has been sucessfully sent'
        ];
    }
}
