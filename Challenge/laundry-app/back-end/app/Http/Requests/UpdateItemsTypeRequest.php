<?php

namespace App\Http\Requests;

use App\ItemsType;
use Illuminate\Foundation\Http\FormRequest;

class UpdateItemsTypeRequest extends FormRequest
{
    public function authorize()
    {
        return \Gate::allows('items_type_edit');
    }

    public function rules()
    {
        return [
            'title' => [
                'required',
            ],
            'price' => [
                'required',
            ],
        ];
    }
}
