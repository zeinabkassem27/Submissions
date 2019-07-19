<?php

namespace App\Http\Requests;

use App\ItemsType;
use Illuminate\Foundation\Http\FormRequest;

class StoreItemsTypeRequest extends FormRequest
{
    public function authorize()
    {
        return \Gate::allows('items_type_create');
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
            'image' => [
                'required',
            ],
        ];
    }
}
