<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreItemsTypeRequest;
use App\Http\Requests\UpdateItemsTypeRequest;
use App\ItemsType;

class ItemsTypeApiController extends Controller
{
    public function index()
    {
        $itemsTypes = ItemsType::all();

        return $itemsTypes;
    }

    public function store(StoreItemsTypeRequest $request)
    {
        return ItemsType::create($request->all());
    }

    public function update(UpdateItemsTypeRequest $request, ItemsType $itemsType)
    {
        return $itemsType->update($request->all());
    }

    public function show(ItemsType $itemsType)
    {
        return $itemsType;
    }

    public function destroy(ItemsType $itemsType)
    {
        return $itemsType->delete();
    }
}
