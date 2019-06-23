<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Order;

class OrdersApiController extends Controller
{
    public function index()
    {
        $orders = Order::all();

        return $orders;
    }

    public function store(StoreOrderRequest $request)
    {
        return Order::create($request->all());
    }

    public function update(UpdateOrderRequest $request, Order $order)
    {
        return $order->update($request->all());
    }

    public function show(Order $order)
    {
        return $order;
    }

    public function destroy(Order $order)
    {
        return $order->delete();
    }
}
