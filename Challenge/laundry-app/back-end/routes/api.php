<?php

Route::group( [ 'prefix' => 'v1', 'as' => 'admin.', 'namespace' => 'Api\V1\Admin' ], function () {
    Route::apiResource( 'permissions', 'PermissionsApiController' );
    
    Route::apiResource( 'roles', 'RolesApiController' );
    
    Route::apiResource( 'users', 'UsersApiController' );
    
    Route::apiResource( 'orders', 'OrdersApiController' );
    
    Route::apiResource( 'items-types', 'ItemsTypeApiController' );
    
    Route::apiResource( 'order-items', 'OrderItemsApiController' );
    
    Route::apiResource( 'content-categories', 'ContentCategoryApiController' );
    
    Route::apiResource( 'content-tags', 'ContentTagApiController' );
    
    Route::apiResource( 'content-pages', 'ContentPageApiController' );
    
    Route::apiResource( 'contacts', 'ContactsApiController' );
    
    
} );

Route::post('login', 'APILoginController@login');

// users is a route protected by jwt
Route::middleware('jwt.auth')->get('users', function () {
    return auth('api')->user();
});
