<?php

namespace App\Http\Requests;

use App\OrderItem;
use Illuminate\Foundation\Http\FormRequest;

class StoreOrderItemRequest extends FormRequest
{
    public function authorize()
    {
        return \Gate::allows('order_item_create');
    }

    public function rules()
    {
        return [
            'order_id'     => [
                'required',
                'integer',
            ],
            'item_type_id' => [
                'required',
                'integer',
            ],
        ];
    }
}
