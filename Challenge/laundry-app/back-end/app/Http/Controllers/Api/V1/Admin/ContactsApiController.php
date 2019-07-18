<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Contact;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;

class ContactsApiController extends Controller
{
    public function __construct() {
        $this->middleware( 'jwt.auth' )->except( [ 'store' ] );
    }
    
    public function index()
    {
        $contacts = Contact::all();

        return $contacts;
    }

    public function store(StoreContactRequest $request)
    {
        return Contact::create($request->all());
    }

    public function update(UpdateContactRequest $request, Contact $contact)
    {
        return $contact->update($request->all());
    }

    public function show(Contact $contact)
    {
        return $contact;
    }

    public function destroy(Contact $contact)
    {
        return $contact->delete();
    }
}
