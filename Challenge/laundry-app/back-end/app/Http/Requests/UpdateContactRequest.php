<?php

namespace App\Http\Requests;

use App\Contact;
use Illuminate\Foundation\Http\FormRequest;

class UpdateContactRequest extends FormRequest
{
    public function authorize()
    {
        return \Gate::allows('contact_edit');
    }

    public function rules()
    {
        return [
            'subject' => [
                'required',
            ],
            'message' => [
                'required',
            ],
            'email'   => [
                'required',
            ],
        ];
    }
}
