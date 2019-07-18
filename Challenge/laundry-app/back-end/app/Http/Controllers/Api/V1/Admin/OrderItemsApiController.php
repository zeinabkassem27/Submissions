<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderItemRequest;
use App\Http\Requests\UpdateOrderItemRequest;
use App\OrderItem;

class OrderItemsApiController extends Controller
{
    public function __construct() {
        $this->middleware('jwt.auth');
    }
    
    public function index()
    {
        $orderItems = OrderItem::all();

        return $orderItems;
    }

    public function store(StoreOrderItemRequest $request)
    {
        return OrderItem::create($request->all());
    }

    public function update(UpdateOrderItemRequest $request, OrderItem $orderItem)
    {
        return $orderItem->update($request->all());
    }

    public function show(OrderItem $orderItem)
    {
        return $orderItem;
    }

    public function destroy(OrderItem $orderItem)
    {
        return $orderItem->delete();
    }
}
