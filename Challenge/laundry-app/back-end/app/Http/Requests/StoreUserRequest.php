<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    public function authorize()
    {
        return \Gate::allows('user_create');
    }

    public function rules()
    {
        return [
            'first_name'  => [
                'required',
            ],
            'last_name'   => [
                'required',
            ],
            'middle_name' => [
                'required',
            ],
            'email'       => [
                'required',
            ],
            'password'    => [
                'required',
            ],
            'roles.*'     => [
                'integer',
            ],
            'roles'       => [
                'required',
                'array',
            ],
        ];
    }
}
