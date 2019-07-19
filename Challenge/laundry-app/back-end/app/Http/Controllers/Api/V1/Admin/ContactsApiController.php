<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Contact;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
/**
 * @group Contact management
 *
 * APIs for managing contacts
 */
class ContactsApiController extends Controller
{
    
    public function __construct() {
        $this->middleware( 'jwt.auth' )->except( [ 'store' ] );
    }
    /**
     * Fetch the list of all contacts
     *
     * This api route return all the contacts in the database without the deleted one
     *
     */
    public function index()
    {
        $contacts = Contact::all();

        return $contacts;
    }
    /**
     * Store a contact request inside the database and send email to the administrators
     *
     * The email functionality
     *
     * @bodyParam subject string required The subject of the contact form.
     * @bodyParam message string required The message of the contact form.
     * @bodyParam email required string The user email who submitted the contact form
     */
    public function store(StoreContactRequest $request)
    {
        return Contact::create($request->all());
    }
    
    /**
     * Update a contact request inside the database
     *
     * This functionality is to be used in the admin panel <br/>
     * For the {contact} pass the contact id
     *
     * @bodyParam subject string required The subject of the contact form.
     * @bodyParam message string required The message of the contact form.
     * @bodyParam email required string The user email who submitted the contact form
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        return $contact->update($request->all());
    }
    
    /**
     * Fetch 1 contact per contact id
     *
     * This functionality is to be used in the admin panel <br/>
     * For the {contact} pass the contact id
     *
     */
    public function show(Contact $contact)
    {
        return $contact;
    }
    
    /**
     * Partially delete a contact request inside the database
     *
     * This functionality is to be used in the admin panel <br/>
     * For the {contact} pass the contact id
     *
     */
    public function destroy(Contact $contact)
    {
        return $contact->delete();
    }
}
