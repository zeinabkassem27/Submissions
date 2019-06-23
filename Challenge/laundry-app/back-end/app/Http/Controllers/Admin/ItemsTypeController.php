<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MassDestroyItemsTypeRequest;
use App\Http\Requests\StoreItemsTypeRequest;
use App\Http\Requests\UpdateItemsTypeRequest;
use App\ItemsType;

class ItemsTypeController extends Controller
{
    public function index()
    {
        abort_unless(\Gate::allows('items_type_access'), 403);

        $itemsTypes = ItemsType::all();

        return view('admin.itemsTypes.index', compact('itemsTypes'));
    }

    public function create()
    {
        abort_unless(\Gate::allows('items_type_create'), 403);

        return view('admin.itemsTypes.create');
    }

    public function store(StoreItemsTypeRequest $request)
    {
        abort_unless(\Gate::allows('items_type_create'), 403);

        $itemsType = ItemsType::create($request->all());

        return redirect()->route('admin.items-types.index');
    }

    public function edit(ItemsType $itemsType)
    {
        abort_unless(\Gate::allows('items_type_edit'), 403);

        return view('admin.itemsTypes.edit', compact('itemsType'));
    }

    public function update(UpdateItemsTypeRequest $request, ItemsType $itemsType)
    {
        abort_unless(\Gate::allows('items_type_edit'), 403);

        $itemsType->update($request->all());

        return redirect()->route('admin.items-types.index');
    }

    public function show(ItemsType $itemsType)
    {
        abort_unless(\Gate::allows('items_type_show'), 403);

        return view('admin.itemsTypes.show', compact('itemsType'));
    }

    public function destroy(ItemsType $itemsType)
    {
        abort_unless(\Gate::allows('items_type_delete'), 403);

        $itemsType->delete();

        return back();
    }

    public function massDestroy(MassDestroyItemsTypeRequest $request)
    {
        ItemsType::whereIn('id', request('ids'))->delete();

        return response(null, 204);
    }
}
