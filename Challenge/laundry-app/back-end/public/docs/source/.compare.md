---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/docs/collection.json)

<!-- END_INFO -->

#general
<!-- START_41d2f7697c6118f36f8b676e5bd19ea0 -->
## Login using the given user ID / email.

> Example request:

```bash
curl -X GET -G "http://localhost/_dusk/login/1/1" 
```

```javascript
const url = new URL("http://localhost/_dusk/login/1/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET _dusk/login/{userId}/{guard?}`


<!-- END_41d2f7697c6118f36f8b676e5bd19ea0 -->

<!-- START_6375e7300024aae0f6af283b4a72cb1b -->
## Log the user out of the application.

> Example request:

```bash
curl -X GET -G "http://localhost/_dusk/logout/1" 
```

```javascript
const url = new URL("http://localhost/_dusk/logout/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET _dusk/logout/{guard?}`


<!-- END_6375e7300024aae0f6af283b4a72cb1b -->

<!-- START_09dcf3e9a9b6585fa40e4ead6c3c858a -->
## Retrieve the authenticated user identifier and class name.

> Example request:

```bash
curl -X GET -G "http://localhost/_dusk/user/1" 
```

```javascript
const url = new URL("http://localhost/_dusk/user/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET _dusk/user/{guard?}`


<!-- END_09dcf3e9a9b6585fa40e4ead6c3c858a -->

<!-- START_bd2777b2132db6c9cf93e928b5b5e44d -->
## api/v1/permissions
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/permissions" 
```

```javascript
const url = new URL("http://localhost/api/v1/permissions");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/permissions`


<!-- END_bd2777b2132db6c9cf93e928b5b5e44d -->

<!-- START_defb597dbd6eb21dee1f472ef6340873 -->
## api/v1/permissions
> Example request:

```bash
curl -X POST "http://localhost/api/v1/permissions" 
```

```javascript
const url = new URL("http://localhost/api/v1/permissions");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/permissions`


<!-- END_defb597dbd6eb21dee1f472ef6340873 -->

<!-- START_2cbf87c71ec8fd9634996f224a875400 -->
## api/v1/permissions/{permission}
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/permissions/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/permissions/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/permissions/{permission}`


<!-- END_2cbf87c71ec8fd9634996f224a875400 -->

<!-- START_102bcc89441658cf73bc3c85f82009fe -->
## api/v1/permissions/{permission}
> Example request:

```bash
curl -X PUT "http://localhost/api/v1/permissions/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/permissions/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/permissions/{permission}`

`PATCH api/v1/permissions/{permission}`


<!-- END_102bcc89441658cf73bc3c85f82009fe -->

<!-- START_a76ff06df82f5e7b38639608624548fe -->
## api/v1/permissions/{permission}
> Example request:

```bash
curl -X DELETE "http://localhost/api/v1/permissions/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/permissions/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/permissions/{permission}`


<!-- END_a76ff06df82f5e7b38639608624548fe -->

<!-- START_d2f16357cb4ed36dbb0e9529ea4a460c -->
## api/v1/roles
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/roles" 
```

```javascript
const url = new URL("http://localhost/api/v1/roles");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/roles`


<!-- END_d2f16357cb4ed36dbb0e9529ea4a460c -->

<!-- START_5f753b2bffb6b34b6136ddfe1be7bcce -->
## api/v1/roles
> Example request:

```bash
curl -X POST "http://localhost/api/v1/roles" 
```

```javascript
const url = new URL("http://localhost/api/v1/roles");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/roles`


<!-- END_5f753b2bffb6b34b6136ddfe1be7bcce -->

<!-- START_ba05db58d706b9f94944b1ab79e1e4a2 -->
## api/v1/roles/{role}
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/roles/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/roles/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/roles/{role}`


<!-- END_ba05db58d706b9f94944b1ab79e1e4a2 -->

<!-- START_81ac9047f8db2b92092c5a7f13e5d28d -->
## api/v1/roles/{role}
> Example request:

```bash
curl -X PUT "http://localhost/api/v1/roles/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/roles/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/roles/{role}`

`PATCH api/v1/roles/{role}`


<!-- END_81ac9047f8db2b92092c5a7f13e5d28d -->

<!-- START_04c524fc2f0ea8c793406426144b4c71 -->
## api/v1/roles/{role}
> Example request:

```bash
curl -X DELETE "http://localhost/api/v1/roles/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/roles/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/roles/{role}`


<!-- END_04c524fc2f0ea8c793406426144b4c71 -->

<!-- START_1aff981da377ba9a1bbc56ff8efaec0d -->
## api/v1/users
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/users" 
```

```javascript
const url = new URL("http://localhost/api/v1/users");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/users`


<!-- END_1aff981da377ba9a1bbc56ff8efaec0d -->

<!-- START_4194ceb9a20b7f80b61d14d44df366b4 -->
## api/v1/users
> Example request:

```bash
curl -X POST "http://localhost/api/v1/users" 
```

```javascript
const url = new URL("http://localhost/api/v1/users");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/users`


<!-- END_4194ceb9a20b7f80b61d14d44df366b4 -->

<!-- START_cedc85e856362e0e3b46f5dcd9f8f5d0 -->
## api/v1/users/{user}
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/users/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/users/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/users/{user}`


<!-- END_cedc85e856362e0e3b46f5dcd9f8f5d0 -->

<!-- START_296fac4bf818c99f6dd42a4a0eb56b58 -->
## api/v1/users/{user}
> Example request:

```bash
curl -X PUT "http://localhost/api/v1/users/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/users/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/users/{user}`

`PATCH api/v1/users/{user}`


<!-- END_296fac4bf818c99f6dd42a4a0eb56b58 -->

<!-- START_22354fc95c42d81a744eece68f5b9b9a -->
## api/v1/users/{user}
> Example request:

```bash
curl -X DELETE "http://localhost/api/v1/users/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/users/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/users/{user}`


<!-- END_22354fc95c42d81a744eece68f5b9b9a -->

<!-- START_25bf4092f5e200124a149897733aac34 -->
## api/v1/orders
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/orders" 
```

```javascript
const url = new URL("http://localhost/api/v1/orders");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/orders`


<!-- END_25bf4092f5e200124a149897733aac34 -->

<!-- START_c79cb2035f69ac8078c2cec9fc2fab4a -->
## api/v1/orders
> Example request:

```bash
curl -X POST "http://localhost/api/v1/orders" 
```

```javascript
const url = new URL("http://localhost/api/v1/orders");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/orders`


<!-- END_c79cb2035f69ac8078c2cec9fc2fab4a -->

<!-- START_b4bbc4b1b4c4ddc2effe9e5e2475dd8d -->
## api/v1/orders/{order}
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/orders/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/orders/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/orders/{order}`


<!-- END_b4bbc4b1b4c4ddc2effe9e5e2475dd8d -->

<!-- START_2e6d997181b1c50b2b94eaa14b66f016 -->
## api/v1/orders/{order}
> Example request:

```bash
curl -X PUT "http://localhost/api/v1/orders/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/orders/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/orders/{order}`

`PATCH api/v1/orders/{order}`


<!-- END_2e6d997181b1c50b2b94eaa14b66f016 -->

<!-- START_f34ad9d71f18dd67576cc6db60268192 -->
## api/v1/orders/{order}
> Example request:

```bash
curl -X DELETE "http://localhost/api/v1/orders/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/orders/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/orders/{order}`


<!-- END_f34ad9d71f18dd67576cc6db60268192 -->

<!-- START_323ddaaf1bb6fc0f57fbc28e70705ab6 -->
## api/v1/items-types
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/items-types" 
```

```javascript
const url = new URL("http://localhost/api/v1/items-types");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/items-types`


<!-- END_323ddaaf1bb6fc0f57fbc28e70705ab6 -->

<!-- START_5d51c6a02f4172bc96665a23e792e5c2 -->
## api/v1/items-types
> Example request:

```bash
curl -X POST "http://localhost/api/v1/items-types" 
```

```javascript
const url = new URL("http://localhost/api/v1/items-types");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/items-types`


<!-- END_5d51c6a02f4172bc96665a23e792e5c2 -->

<!-- START_7f5477ca19e3164647bccc1d1d38c139 -->
## api/v1/items-types/{items_type}
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/items-types/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/items-types/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": "No query results for model [App\\ItemsType] 1"
}
```

### HTTP Request
`GET api/v1/items-types/{items_type}`


<!-- END_7f5477ca19e3164647bccc1d1d38c139 -->

<!-- START_4106c27b20bac006382e473a83c750f6 -->
## api/v1/items-types/{items_type}
> Example request:

```bash
curl -X PUT "http://localhost/api/v1/items-types/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/items-types/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/items-types/{items_type}`

`PATCH api/v1/items-types/{items_type}`


<!-- END_4106c27b20bac006382e473a83c750f6 -->

<!-- START_a7cd3ab712d2ef327aedf01078ae74b0 -->
## api/v1/items-types/{items_type}
> Example request:

```bash
curl -X DELETE "http://localhost/api/v1/items-types/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/items-types/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/items-types/{items_type}`


<!-- END_a7cd3ab712d2ef327aedf01078ae74b0 -->

<!-- START_0514ba5d9dea73595bef9063895476ba -->
## api/v1/order-items
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/order-items" 
```

```javascript
const url = new URL("http://localhost/api/v1/order-items");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/order-items`


<!-- END_0514ba5d9dea73595bef9063895476ba -->

<!-- START_d288b2186b153f60b446973521c976cf -->
## api/v1/order-items
> Example request:

```bash
curl -X POST "http://localhost/api/v1/order-items" 
```

```javascript
const url = new URL("http://localhost/api/v1/order-items");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/order-items`


<!-- END_d288b2186b153f60b446973521c976cf -->

<!-- START_6686a023ef6872dedd1749beb4a00d7a -->
## api/v1/order-items/{order_item}
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/order-items/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/order-items/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": "No query results for model [App\\OrderItem] 1"
}
```

### HTTP Request
`GET api/v1/order-items/{order_item}`


<!-- END_6686a023ef6872dedd1749beb4a00d7a -->

<!-- START_2fd9845df376b08d8d108f563c8709c0 -->
## api/v1/order-items/{order_item}
> Example request:

```bash
curl -X PUT "http://localhost/api/v1/order-items/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/order-items/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/order-items/{order_item}`

`PATCH api/v1/order-items/{order_item}`


<!-- END_2fd9845df376b08d8d108f563c8709c0 -->

<!-- START_9981e7b68fd4e46d4bcd9670af7ad668 -->
## api/v1/order-items/{order_item}
> Example request:

```bash
curl -X DELETE "http://localhost/api/v1/order-items/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/order-items/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/order-items/{order_item}`


<!-- END_9981e7b68fd4e46d4bcd9670af7ad668 -->

<!-- START_8d91e5844d6d0d4d4bd6c81bea6a2da7 -->
## api/v1/content-categories
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/content-categories" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-categories");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/content-categories`


<!-- END_8d91e5844d6d0d4d4bd6c81bea6a2da7 -->

<!-- START_e5d0933328bdfa061318c13aadde041c -->
## api/v1/content-categories
> Example request:

```bash
curl -X POST "http://localhost/api/v1/content-categories" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-categories");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/content-categories`


<!-- END_e5d0933328bdfa061318c13aadde041c -->

<!-- START_6fec64742648888fcda919bbda89576a -->
## api/v1/content-categories/{content_category}
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/content-categories/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-categories/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": "No query results for model [App\\ContentCategory] 1"
}
```

### HTTP Request
`GET api/v1/content-categories/{content_category}`


<!-- END_6fec64742648888fcda919bbda89576a -->

<!-- START_6662634ed8621ccf89295e4a5279612a -->
## api/v1/content-categories/{content_category}
> Example request:

```bash
curl -X PUT "http://localhost/api/v1/content-categories/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-categories/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/content-categories/{content_category}`

`PATCH api/v1/content-categories/{content_category}`


<!-- END_6662634ed8621ccf89295e4a5279612a -->

<!-- START_924a6b254f657e417f7885078b96208b -->
## api/v1/content-categories/{content_category}
> Example request:

```bash
curl -X DELETE "http://localhost/api/v1/content-categories/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-categories/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/content-categories/{content_category}`


<!-- END_924a6b254f657e417f7885078b96208b -->

<!-- START_e3ad7aa79c2581181bb9c8736d5263cb -->
## api/v1/content-tags
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/content-tags" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-tags");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/content-tags`


<!-- END_e3ad7aa79c2581181bb9c8736d5263cb -->

<!-- START_e23dec6942ce8a5a8ebf203bccc43887 -->
## api/v1/content-tags
> Example request:

```bash
curl -X POST "http://localhost/api/v1/content-tags" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-tags");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/content-tags`


<!-- END_e23dec6942ce8a5a8ebf203bccc43887 -->

<!-- START_1e556198cde575f8011775c9062f823b -->
## api/v1/content-tags/{content_tag}
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/content-tags/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-tags/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": "No query results for model [App\\ContentTag] 1"
}
```

### HTTP Request
`GET api/v1/content-tags/{content_tag}`


<!-- END_1e556198cde575f8011775c9062f823b -->

<!-- START_5459bf27b1be4db934cc4186ede2a030 -->
## api/v1/content-tags/{content_tag}
> Example request:

```bash
curl -X PUT "http://localhost/api/v1/content-tags/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-tags/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/content-tags/{content_tag}`

`PATCH api/v1/content-tags/{content_tag}`


<!-- END_5459bf27b1be4db934cc4186ede2a030 -->

<!-- START_189360b64f2b2347996af22b9867b40d -->
## api/v1/content-tags/{content_tag}
> Example request:

```bash
curl -X DELETE "http://localhost/api/v1/content-tags/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-tags/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/content-tags/{content_tag}`


<!-- END_189360b64f2b2347996af22b9867b40d -->

<!-- START_6f34192e005ba8895be877ad6bba4672 -->
## api/v1/content-pages
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/content-pages" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-pages");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/content-pages`


<!-- END_6f34192e005ba8895be877ad6bba4672 -->

<!-- START_5ab737b22d5e837c6f39aff170594e84 -->
## api/v1/content-pages
> Example request:

```bash
curl -X POST "http://localhost/api/v1/content-pages" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-pages");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/content-pages`


<!-- END_5ab737b22d5e837c6f39aff170594e84 -->

<!-- START_f879dd1caac0395c595968ca58800b50 -->
## api/v1/content-pages/{content_page}
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/content-pages/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-pages/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": "No query results for model [App\\ContentPage] 1"
}
```

### HTTP Request
`GET api/v1/content-pages/{content_page}`


<!-- END_f879dd1caac0395c595968ca58800b50 -->

<!-- START_955b1123a58ee7d3b66a6adfb6a9ff5d -->
## api/v1/content-pages/{content_page}
> Example request:

```bash
curl -X PUT "http://localhost/api/v1/content-pages/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-pages/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/content-pages/{content_page}`

`PATCH api/v1/content-pages/{content_page}`


<!-- END_955b1123a58ee7d3b66a6adfb6a9ff5d -->

<!-- START_a0122b565edaf776aa8feafb62b7771d -->
## api/v1/content-pages/{content_page}
> Example request:

```bash
curl -X DELETE "http://localhost/api/v1/content-pages/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/content-pages/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/content-pages/{content_page}`


<!-- END_a0122b565edaf776aa8feafb62b7771d -->

<!-- START_2320936f7c7a29fe1b1faf0be6fee8ef -->
## api/v1/contacts
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/contacts" 
```

```javascript
const url = new URL("http://localhost/api/v1/contacts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "error": "Token not provided"
}
```

### HTTP Request
`GET api/v1/contacts`


<!-- END_2320936f7c7a29fe1b1faf0be6fee8ef -->

<!-- START_47c2efeaf62c42ca6aab8e676b494b40 -->
## api/v1/contacts
> Example request:

```bash
curl -X POST "http://localhost/api/v1/contacts" 
```

```javascript
const url = new URL("http://localhost/api/v1/contacts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/contacts`


<!-- END_47c2efeaf62c42ca6aab8e676b494b40 -->

<!-- START_b77d96849f13e518dd79c7801a8f0854 -->
## api/v1/contacts/{contact}
> Example request:

```bash
curl -X GET -G "http://localhost/api/v1/contacts/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/contacts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": "No query results for model [App\\Contact] 1"
}
```

### HTTP Request
`GET api/v1/contacts/{contact}`


<!-- END_b77d96849f13e518dd79c7801a8f0854 -->

<!-- START_9aec7381d4dd89e68a9ff728678d8b21 -->
## api/v1/contacts/{contact}
> Example request:

```bash
curl -X PUT "http://localhost/api/v1/contacts/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/contacts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/contacts/{contact}`

`PATCH api/v1/contacts/{contact}`


<!-- END_9aec7381d4dd89e68a9ff728678d8b21 -->

<!-- START_6edc54ea34dd384c52c2ab85854ca8a2 -->
## api/v1/contacts/{contact}
> Example request:

```bash
curl -X DELETE "http://localhost/api/v1/contacts/1" 
```

```javascript
const url = new URL("http://localhost/api/v1/contacts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/v1/contacts/{contact}`


<!-- END_6edc54ea34dd384c52c2ab85854ca8a2 -->

<!-- START_c3fa189a6c95ca36ad6ac4791a873d23 -->
## api/login
> Example request:

```bash
curl -X POST "http://localhost/api/login" 
```

```javascript
const url = new URL("http://localhost/api/login");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/login`


<!-- END_c3fa189a6c95ca36ad6ac4791a873d23 -->

<!-- START_3340c681e1d077cb3238cfcd9aad8f90 -->
## Invoke the controller method.

> Example request:

```bash
curl -X GET -G "http://localhost/" 
```

```javascript
const url = new URL("http://localhost/");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET /`

`POST /`

`PUT /`

`PATCH /`

`DELETE /`

`OPTIONS /`


<!-- END_3340c681e1d077cb3238cfcd9aad8f90 -->

<!-- START_9a9656aa8cc8e507cb05f9ee17d2818b -->
## Invoke the controller method.

> Example request:

```bash
curl -X GET -G "http://localhost/home" 
```

```javascript
const url = new URL("http://localhost/home");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET home`

`POST home`

`PUT home`

`PATCH home`

`DELETE home`

`OPTIONS home`


<!-- END_9a9656aa8cc8e507cb05f9ee17d2818b -->

<!-- START_66e08d3cc8222573018fed49e121e96d -->
## Show the application&#039;s login form.

> Example request:

```bash
curl -X GET -G "http://localhost/login" 
```

```javascript
const url = new URL("http://localhost/login");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET login`


<!-- END_66e08d3cc8222573018fed49e121e96d -->

<!-- START_ba35aa39474cb98cfb31829e70eb8b74 -->
## Handle a login request to the application.

> Example request:

```bash
curl -X POST "http://localhost/login" 
```

```javascript
const url = new URL("http://localhost/login");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST login`


<!-- END_ba35aa39474cb98cfb31829e70eb8b74 -->

<!-- START_e65925f23b9bc6b93d9356895f29f80c -->
## Log the user out of the application.

> Example request:

```bash
curl -X POST "http://localhost/logout" 
```

```javascript
const url = new URL("http://localhost/logout");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST logout`


<!-- END_e65925f23b9bc6b93d9356895f29f80c -->

<!-- START_d72797bae6d0b1f3a341ebb1f8900441 -->
## Display the form to request a password reset link.

> Example request:

```bash
curl -X GET -G "http://localhost/password/reset" 
```

```javascript
const url = new URL("http://localhost/password/reset");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset`


<!-- END_d72797bae6d0b1f3a341ebb1f8900441 -->

<!-- START_feb40f06a93c80d742181b6ffb6b734e -->
## Send a reset link to the given user.

> Example request:

```bash
curl -X POST "http://localhost/password/email" 
```

```javascript
const url = new URL("http://localhost/password/email");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/email`


<!-- END_feb40f06a93c80d742181b6ffb6b734e -->

<!-- START_e1605a6e5ceee9d1aeb7729216635fd7 -->
## Display the password reset view for the given token.

If no token is present, display the link request form.

> Example request:

```bash
curl -X GET -G "http://localhost/password/reset/1" 
```

```javascript
const url = new URL("http://localhost/password/reset/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset/{token}`


<!-- END_e1605a6e5ceee9d1aeb7729216635fd7 -->

<!-- START_cafb407b7a846b31491f97719bb15aef -->
## Reset the given user&#039;s password.

> Example request:

```bash
curl -X POST "http://localhost/password/reset" 
```

```javascript
const url = new URL("http://localhost/password/reset");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/reset`


<!-- END_cafb407b7a846b31491f97719bb15aef -->

<!-- START_e40bc60a458a9740730202aaec04f818 -->
## admin
> Example request:

```bash
curl -X GET -G "http://localhost/admin" 
```

```javascript
const url = new URL("http://localhost/admin");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin`


<!-- END_e40bc60a458a9740730202aaec04f818 -->

<!-- START_8f583347cc741210524d7e2829645ea5 -->
## admin/permissions/destroy
> Example request:

```bash
curl -X DELETE "http://localhost/admin/permissions/destroy" 
```

```javascript
const url = new URL("http://localhost/admin/permissions/destroy");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/permissions/destroy`


<!-- END_8f583347cc741210524d7e2829645ea5 -->

<!-- START_507ea499e1f258d23592f36d68e679c8 -->
## admin/permissions
> Example request:

```bash
curl -X GET -G "http://localhost/admin/permissions" 
```

```javascript
const url = new URL("http://localhost/admin/permissions");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/permissions`


<!-- END_507ea499e1f258d23592f36d68e679c8 -->

<!-- START_8af39b8b8467d71aafdf675eab809e47 -->
## admin/permissions/create
> Example request:

```bash
curl -X GET -G "http://localhost/admin/permissions/create" 
```

```javascript
const url = new URL("http://localhost/admin/permissions/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/permissions/create`


<!-- END_8af39b8b8467d71aafdf675eab809e47 -->

<!-- START_f1b0f0143b42a05f7de260e9489a48a8 -->
## admin/permissions
> Example request:

```bash
curl -X POST "http://localhost/admin/permissions" 
```

```javascript
const url = new URL("http://localhost/admin/permissions");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/permissions`


<!-- END_f1b0f0143b42a05f7de260e9489a48a8 -->

<!-- START_52941ce4d55aac10ab700af19c6cf7fd -->
## admin/permissions/{permission}
> Example request:

```bash
curl -X GET -G "http://localhost/admin/permissions/1" 
```

```javascript
const url = new URL("http://localhost/admin/permissions/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/permissions/{permission}`


<!-- END_52941ce4d55aac10ab700af19c6cf7fd -->

<!-- START_263860a5fe135afe0dfb6ece84279f62 -->
## admin/permissions/{permission}/edit
> Example request:

```bash
curl -X GET -G "http://localhost/admin/permissions/1/edit" 
```

```javascript
const url = new URL("http://localhost/admin/permissions/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/permissions/{permission}/edit`


<!-- END_263860a5fe135afe0dfb6ece84279f62 -->

<!-- START_84a298099551f7e3b7a4167dbb77f79c -->
## admin/permissions/{permission}
> Example request:

```bash
curl -X PUT "http://localhost/admin/permissions/1" 
```

```javascript
const url = new URL("http://localhost/admin/permissions/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/permissions/{permission}`

`PATCH admin/permissions/{permission}`


<!-- END_84a298099551f7e3b7a4167dbb77f79c -->

<!-- START_26cd27653b91a7f60ca8666929159078 -->
## admin/permissions/{permission}
> Example request:

```bash
curl -X DELETE "http://localhost/admin/permissions/1" 
```

```javascript
const url = new URL("http://localhost/admin/permissions/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/permissions/{permission}`


<!-- END_26cd27653b91a7f60ca8666929159078 -->

<!-- START_9a3494b330f2468d48a283465528dd7d -->
## admin/roles/destroy
> Example request:

```bash
curl -X DELETE "http://localhost/admin/roles/destroy" 
```

```javascript
const url = new URL("http://localhost/admin/roles/destroy");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/roles/destroy`


<!-- END_9a3494b330f2468d48a283465528dd7d -->

<!-- START_879622c0ac94a4a0f4d364d46a42bc7e -->
## admin/roles
> Example request:

```bash
curl -X GET -G "http://localhost/admin/roles" 
```

```javascript
const url = new URL("http://localhost/admin/roles");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/roles`


<!-- END_879622c0ac94a4a0f4d364d46a42bc7e -->

<!-- START_d29246d3a43660bb5210bf9aff91c85a -->
## admin/roles/create
> Example request:

```bash
curl -X GET -G "http://localhost/admin/roles/create" 
```

```javascript
const url = new URL("http://localhost/admin/roles/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/roles/create`


<!-- END_d29246d3a43660bb5210bf9aff91c85a -->

<!-- START_9117e54780cf55c5071dfb91b33aaef6 -->
## admin/roles
> Example request:

```bash
curl -X POST "http://localhost/admin/roles" 
```

```javascript
const url = new URL("http://localhost/admin/roles");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/roles`


<!-- END_9117e54780cf55c5071dfb91b33aaef6 -->

<!-- START_13b678fa4fec2b2a37ef8510c152dc44 -->
## admin/roles/{role}
> Example request:

```bash
curl -X GET -G "http://localhost/admin/roles/1" 
```

```javascript
const url = new URL("http://localhost/admin/roles/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/roles/{role}`


<!-- END_13b678fa4fec2b2a37ef8510c152dc44 -->

<!-- START_beee0bc2c2bf5945907dc7735ae5abfc -->
## admin/roles/{role}/edit
> Example request:

```bash
curl -X GET -G "http://localhost/admin/roles/1/edit" 
```

```javascript
const url = new URL("http://localhost/admin/roles/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/roles/{role}/edit`


<!-- END_beee0bc2c2bf5945907dc7735ae5abfc -->

<!-- START_c7dcda79da31b26bc24750dc109d9724 -->
## admin/roles/{role}
> Example request:

```bash
curl -X PUT "http://localhost/admin/roles/1" 
```

```javascript
const url = new URL("http://localhost/admin/roles/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/roles/{role}`

`PATCH admin/roles/{role}`


<!-- END_c7dcda79da31b26bc24750dc109d9724 -->

<!-- START_bf3def166f3885500f81b51b4c2bd978 -->
## admin/roles/{role}
> Example request:

```bash
curl -X DELETE "http://localhost/admin/roles/1" 
```

```javascript
const url = new URL("http://localhost/admin/roles/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/roles/{role}`


<!-- END_bf3def166f3885500f81b51b4c2bd978 -->

<!-- START_638699da87953aa0482969b25e4fc4c6 -->
## admin/users/destroy
> Example request:

```bash
curl -X DELETE "http://localhost/admin/users/destroy" 
```

```javascript
const url = new URL("http://localhost/admin/users/destroy");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/users/destroy`


<!-- END_638699da87953aa0482969b25e4fc4c6 -->

<!-- START_7614490a3eef5fbcba402080d0369e6a -->
## admin/users
> Example request:

```bash
curl -X GET -G "http://localhost/admin/users" 
```

```javascript
const url = new URL("http://localhost/admin/users");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/users`


<!-- END_7614490a3eef5fbcba402080d0369e6a -->

<!-- START_5480f74e868e50a30ac924242a423503 -->
## admin/users/create
> Example request:

```bash
curl -X GET -G "http://localhost/admin/users/create" 
```

```javascript
const url = new URL("http://localhost/admin/users/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/users/create`


<!-- END_5480f74e868e50a30ac924242a423503 -->

<!-- START_84cdb3581c8df106c62233f1ebb35d8b -->
## admin/users
> Example request:

```bash
curl -X POST "http://localhost/admin/users" 
```

```javascript
const url = new URL("http://localhost/admin/users");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/users`


<!-- END_84cdb3581c8df106c62233f1ebb35d8b -->

<!-- START_efce1b78e6391078c4024f200af60be8 -->
## admin/users/{user}
> Example request:

```bash
curl -X GET -G "http://localhost/admin/users/1" 
```

```javascript
const url = new URL("http://localhost/admin/users/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/users/{user}`


<!-- END_efce1b78e6391078c4024f200af60be8 -->

<!-- START_f8b3cec767336a1c2280a2a3173678d9 -->
## admin/users/{user}/edit
> Example request:

```bash
curl -X GET -G "http://localhost/admin/users/1/edit" 
```

```javascript
const url = new URL("http://localhost/admin/users/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/users/{user}/edit`


<!-- END_f8b3cec767336a1c2280a2a3173678d9 -->

<!-- START_d7f417f614d8614811f624203f4e63cd -->
## admin/users/{user}
> Example request:

```bash
curl -X PUT "http://localhost/admin/users/1" 
```

```javascript
const url = new URL("http://localhost/admin/users/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/users/{user}`

`PATCH admin/users/{user}`


<!-- END_d7f417f614d8614811f624203f4e63cd -->

<!-- START_d5165e9382f90b24649e6ea2a27ea85d -->
## admin/users/{user}
> Example request:

```bash
curl -X DELETE "http://localhost/admin/users/1" 
```

```javascript
const url = new URL("http://localhost/admin/users/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/users/{user}`


<!-- END_d5165e9382f90b24649e6ea2a27ea85d -->

<!-- START_b485a3cdee57d15fceb76734fb42d32b -->
## admin/orders/destroy
> Example request:

```bash
curl -X DELETE "http://localhost/admin/orders/destroy" 
```

```javascript
const url = new URL("http://localhost/admin/orders/destroy");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/orders/destroy`


<!-- END_b485a3cdee57d15fceb76734fb42d32b -->

<!-- START_ef74fc88219ad75b0acc28af7b662090 -->
## admin/orders
> Example request:

```bash
curl -X GET -G "http://localhost/admin/orders" 
```

```javascript
const url = new URL("http://localhost/admin/orders");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/orders`


<!-- END_ef74fc88219ad75b0acc28af7b662090 -->

<!-- START_86d42efe50fecfeaa256fd0df15fa59f -->
## admin/orders/create
> Example request:

```bash
curl -X GET -G "http://localhost/admin/orders/create" 
```

```javascript
const url = new URL("http://localhost/admin/orders/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/orders/create`


<!-- END_86d42efe50fecfeaa256fd0df15fa59f -->

<!-- START_bcfc7f86622b0198b5cf2056c3c6cdd7 -->
## admin/orders
> Example request:

```bash
curl -X POST "http://localhost/admin/orders" 
```

```javascript
const url = new URL("http://localhost/admin/orders");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/orders`


<!-- END_bcfc7f86622b0198b5cf2056c3c6cdd7 -->

<!-- START_11fc1302fe442e719f73e70c8d67aa39 -->
## admin/orders/{order}
> Example request:

```bash
curl -X GET -G "http://localhost/admin/orders/1" 
```

```javascript
const url = new URL("http://localhost/admin/orders/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/orders/{order}`


<!-- END_11fc1302fe442e719f73e70c8d67aa39 -->

<!-- START_677a8b5f80e3958022cc16b3b1ef69cd -->
## admin/orders/{order}/edit
> Example request:

```bash
curl -X GET -G "http://localhost/admin/orders/1/edit" 
```

```javascript
const url = new URL("http://localhost/admin/orders/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/orders/{order}/edit`


<!-- END_677a8b5f80e3958022cc16b3b1ef69cd -->

<!-- START_a7a4cccd821013bc4824e61409a84ad7 -->
## admin/orders/{order}
> Example request:

```bash
curl -X PUT "http://localhost/admin/orders/1" 
```

```javascript
const url = new URL("http://localhost/admin/orders/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/orders/{order}`

`PATCH admin/orders/{order}`


<!-- END_a7a4cccd821013bc4824e61409a84ad7 -->

<!-- START_57da060bf78add7b67b784403fce47c8 -->
## admin/orders/{order}
> Example request:

```bash
curl -X DELETE "http://localhost/admin/orders/1" 
```

```javascript
const url = new URL("http://localhost/admin/orders/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/orders/{order}`


<!-- END_57da060bf78add7b67b784403fce47c8 -->

<!-- START_e8aedfd0026743c6e96042a90cc0b99e -->
## admin/items-types/destroy
> Example request:

```bash
curl -X DELETE "http://localhost/admin/items-types/destroy" 
```

```javascript
const url = new URL("http://localhost/admin/items-types/destroy");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/items-types/destroy`


<!-- END_e8aedfd0026743c6e96042a90cc0b99e -->

<!-- START_99be299abd4f7d65ce9df913a41910e0 -->
## admin/items-types
> Example request:

```bash
curl -X GET -G "http://localhost/admin/items-types" 
```

```javascript
const url = new URL("http://localhost/admin/items-types");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/items-types`


<!-- END_99be299abd4f7d65ce9df913a41910e0 -->

<!-- START_2c79ab908466201602790252a6735c10 -->
## admin/items-types/create
> Example request:

```bash
curl -X GET -G "http://localhost/admin/items-types/create" 
```

```javascript
const url = new URL("http://localhost/admin/items-types/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/items-types/create`


<!-- END_2c79ab908466201602790252a6735c10 -->

<!-- START_18adeb3ba91ef007df9513a19006754e -->
## admin/items-types
> Example request:

```bash
curl -X POST "http://localhost/admin/items-types" 
```

```javascript
const url = new URL("http://localhost/admin/items-types");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/items-types`


<!-- END_18adeb3ba91ef007df9513a19006754e -->

<!-- START_f21daf4ad84b887d061a8ce0c56572fe -->
## admin/items-types/{items_type}
> Example request:

```bash
curl -X GET -G "http://localhost/admin/items-types/1" 
```

```javascript
const url = new URL("http://localhost/admin/items-types/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/items-types/{items_type}`


<!-- END_f21daf4ad84b887d061a8ce0c56572fe -->

<!-- START_9241741a82fe186ce4c33976ed3cf345 -->
## admin/items-types/{items_type}/edit
> Example request:

```bash
curl -X GET -G "http://localhost/admin/items-types/1/edit" 
```

```javascript
const url = new URL("http://localhost/admin/items-types/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/items-types/{items_type}/edit`


<!-- END_9241741a82fe186ce4c33976ed3cf345 -->

<!-- START_0278603bb050dad2a47bbecf2f5f18ec -->
## admin/items-types/{items_type}
> Example request:

```bash
curl -X PUT "http://localhost/admin/items-types/1" 
```

```javascript
const url = new URL("http://localhost/admin/items-types/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/items-types/{items_type}`

`PATCH admin/items-types/{items_type}`


<!-- END_0278603bb050dad2a47bbecf2f5f18ec -->

<!-- START_1b916562b57d2b082073b6f3ecda1816 -->
## admin/items-types/{items_type}
> Example request:

```bash
curl -X DELETE "http://localhost/admin/items-types/1" 
```

```javascript
const url = new URL("http://localhost/admin/items-types/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/items-types/{items_type}`


<!-- END_1b916562b57d2b082073b6f3ecda1816 -->

<!-- START_0ad099c4ce8c0984a831692594eab6cd -->
## admin/order-items/destroy
> Example request:

```bash
curl -X DELETE "http://localhost/admin/order-items/destroy" 
```

```javascript
const url = new URL("http://localhost/admin/order-items/destroy");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/order-items/destroy`


<!-- END_0ad099c4ce8c0984a831692594eab6cd -->

<!-- START_24af1dcf1e30e77388ec68cff4e21f29 -->
## admin/order-items
> Example request:

```bash
curl -X GET -G "http://localhost/admin/order-items" 
```

```javascript
const url = new URL("http://localhost/admin/order-items");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/order-items`


<!-- END_24af1dcf1e30e77388ec68cff4e21f29 -->

<!-- START_f03723d6a0aac860faf861471f532aef -->
## admin/order-items/create
> Example request:

```bash
curl -X GET -G "http://localhost/admin/order-items/create" 
```

```javascript
const url = new URL("http://localhost/admin/order-items/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/order-items/create`


<!-- END_f03723d6a0aac860faf861471f532aef -->

<!-- START_0a28f6df152dc0f5c60476fa2a9f1b03 -->
## admin/order-items
> Example request:

```bash
curl -X POST "http://localhost/admin/order-items" 
```

```javascript
const url = new URL("http://localhost/admin/order-items");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/order-items`


<!-- END_0a28f6df152dc0f5c60476fa2a9f1b03 -->

<!-- START_740584dc52aad4f6b4eb1489c1b4dde2 -->
## admin/order-items/{order_item}
> Example request:

```bash
curl -X GET -G "http://localhost/admin/order-items/1" 
```

```javascript
const url = new URL("http://localhost/admin/order-items/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/order-items/{order_item}`


<!-- END_740584dc52aad4f6b4eb1489c1b4dde2 -->

<!-- START_1719902efac61dad58b4943e7b505fb0 -->
## admin/order-items/{order_item}/edit
> Example request:

```bash
curl -X GET -G "http://localhost/admin/order-items/1/edit" 
```

```javascript
const url = new URL("http://localhost/admin/order-items/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/order-items/{order_item}/edit`


<!-- END_1719902efac61dad58b4943e7b505fb0 -->

<!-- START_281c61dd932294f1be624f1688616056 -->
## admin/order-items/{order_item}
> Example request:

```bash
curl -X PUT "http://localhost/admin/order-items/1" 
```

```javascript
const url = new URL("http://localhost/admin/order-items/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/order-items/{order_item}`

`PATCH admin/order-items/{order_item}`


<!-- END_281c61dd932294f1be624f1688616056 -->

<!-- START_6aef3aea569062b9f0ae6b5412691317 -->
## admin/order-items/{order_item}
> Example request:

```bash
curl -X DELETE "http://localhost/admin/order-items/1" 
```

```javascript
const url = new URL("http://localhost/admin/order-items/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/order-items/{order_item}`


<!-- END_6aef3aea569062b9f0ae6b5412691317 -->

<!-- START_97e3615326309c20672a3e930c352f5a -->
## admin/audit-logs
> Example request:

```bash
curl -X GET -G "http://localhost/admin/audit-logs" 
```

```javascript
const url = new URL("http://localhost/admin/audit-logs");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/audit-logs`


<!-- END_97e3615326309c20672a3e930c352f5a -->

<!-- START_efad7b7340f2e1b19c41a8fb40ccb7cf -->
## admin/audit-logs/{audit_log}
> Example request:

```bash
curl -X GET -G "http://localhost/admin/audit-logs/1" 
```

```javascript
const url = new URL("http://localhost/admin/audit-logs/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/audit-logs/{audit_log}`


<!-- END_efad7b7340f2e1b19c41a8fb40ccb7cf -->

<!-- START_299974d7f54eb346cb4a3ee90f29c1c4 -->
## admin/content-categories/destroy
> Example request:

```bash
curl -X DELETE "http://localhost/admin/content-categories/destroy" 
```

```javascript
const url = new URL("http://localhost/admin/content-categories/destroy");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/content-categories/destroy`


<!-- END_299974d7f54eb346cb4a3ee90f29c1c4 -->

<!-- START_fbd60ba82e0ed568b2a6d3034c6c4b01 -->
## admin/content-categories
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-categories" 
```

```javascript
const url = new URL("http://localhost/admin/content-categories");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-categories`


<!-- END_fbd60ba82e0ed568b2a6d3034c6c4b01 -->

<!-- START_227f75ca984dcae643e431e43b4f1f0f -->
## admin/content-categories/create
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-categories/create" 
```

```javascript
const url = new URL("http://localhost/admin/content-categories/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-categories/create`


<!-- END_227f75ca984dcae643e431e43b4f1f0f -->

<!-- START_1f9c1efdd59acfd22d10d419b4d7f4dd -->
## admin/content-categories
> Example request:

```bash
curl -X POST "http://localhost/admin/content-categories" 
```

```javascript
const url = new URL("http://localhost/admin/content-categories");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/content-categories`


<!-- END_1f9c1efdd59acfd22d10d419b4d7f4dd -->

<!-- START_3b06ce98d6c4ef6f6f2c2f0ca41cc607 -->
## admin/content-categories/{content_category}
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-categories/1" 
```

```javascript
const url = new URL("http://localhost/admin/content-categories/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-categories/{content_category}`


<!-- END_3b06ce98d6c4ef6f6f2c2f0ca41cc607 -->

<!-- START_0eaa95e72892516cee307b3d04eaf52b -->
## admin/content-categories/{content_category}/edit
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-categories/1/edit" 
```

```javascript
const url = new URL("http://localhost/admin/content-categories/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-categories/{content_category}/edit`


<!-- END_0eaa95e72892516cee307b3d04eaf52b -->

<!-- START_6c75cd0d3c1b432df24189b46bc276df -->
## admin/content-categories/{content_category}
> Example request:

```bash
curl -X PUT "http://localhost/admin/content-categories/1" 
```

```javascript
const url = new URL("http://localhost/admin/content-categories/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/content-categories/{content_category}`

`PATCH admin/content-categories/{content_category}`


<!-- END_6c75cd0d3c1b432df24189b46bc276df -->

<!-- START_25afb07f5b5e96b332175a2f5a06e5c4 -->
## admin/content-categories/{content_category}
> Example request:

```bash
curl -X DELETE "http://localhost/admin/content-categories/1" 
```

```javascript
const url = new URL("http://localhost/admin/content-categories/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/content-categories/{content_category}`


<!-- END_25afb07f5b5e96b332175a2f5a06e5c4 -->

<!-- START_be634664664ce76db96d1a3a6a765321 -->
## admin/content-tags/destroy
> Example request:

```bash
curl -X DELETE "http://localhost/admin/content-tags/destroy" 
```

```javascript
const url = new URL("http://localhost/admin/content-tags/destroy");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/content-tags/destroy`


<!-- END_be634664664ce76db96d1a3a6a765321 -->

<!-- START_90fd8a3f6f609661e59c7741730d3920 -->
## admin/content-tags
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-tags" 
```

```javascript
const url = new URL("http://localhost/admin/content-tags");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-tags`


<!-- END_90fd8a3f6f609661e59c7741730d3920 -->

<!-- START_97b7a243aff92c847ce4dc55c74f4cb1 -->
## admin/content-tags/create
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-tags/create" 
```

```javascript
const url = new URL("http://localhost/admin/content-tags/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-tags/create`


<!-- END_97b7a243aff92c847ce4dc55c74f4cb1 -->

<!-- START_1be362ed17a13e6c17aeabe5c4ae3eea -->
## admin/content-tags
> Example request:

```bash
curl -X POST "http://localhost/admin/content-tags" 
```

```javascript
const url = new URL("http://localhost/admin/content-tags");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/content-tags`


<!-- END_1be362ed17a13e6c17aeabe5c4ae3eea -->

<!-- START_d6b9e7776d0f41042e659fd38a27c5bc -->
## admin/content-tags/{content_tag}
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-tags/1" 
```

```javascript
const url = new URL("http://localhost/admin/content-tags/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-tags/{content_tag}`


<!-- END_d6b9e7776d0f41042e659fd38a27c5bc -->

<!-- START_ced412398aa4b5a51fe7333c385d2b87 -->
## admin/content-tags/{content_tag}/edit
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-tags/1/edit" 
```

```javascript
const url = new URL("http://localhost/admin/content-tags/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-tags/{content_tag}/edit`


<!-- END_ced412398aa4b5a51fe7333c385d2b87 -->

<!-- START_231689f2eeed451988ae25d81a8994da -->
## admin/content-tags/{content_tag}
> Example request:

```bash
curl -X PUT "http://localhost/admin/content-tags/1" 
```

```javascript
const url = new URL("http://localhost/admin/content-tags/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/content-tags/{content_tag}`

`PATCH admin/content-tags/{content_tag}`


<!-- END_231689f2eeed451988ae25d81a8994da -->

<!-- START_c9ae344c728344ef26c24c2b4cf0b0e1 -->
## admin/content-tags/{content_tag}
> Example request:

```bash
curl -X DELETE "http://localhost/admin/content-tags/1" 
```

```javascript
const url = new URL("http://localhost/admin/content-tags/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/content-tags/{content_tag}`


<!-- END_c9ae344c728344ef26c24c2b4cf0b0e1 -->

<!-- START_3ddfe5b814c4d55d92d4032fd5e92626 -->
## admin/content-pages/destroy
> Example request:

```bash
curl -X DELETE "http://localhost/admin/content-pages/destroy" 
```

```javascript
const url = new URL("http://localhost/admin/content-pages/destroy");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/content-pages/destroy`


<!-- END_3ddfe5b814c4d55d92d4032fd5e92626 -->

<!-- START_147fd8064ed2617bf98cadbdccfed23c -->
## admin/content-pages
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-pages" 
```

```javascript
const url = new URL("http://localhost/admin/content-pages");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-pages`


<!-- END_147fd8064ed2617bf98cadbdccfed23c -->

<!-- START_aed28521f968c6929da3a2b8efd6fef0 -->
## admin/content-pages/create
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-pages/create" 
```

```javascript
const url = new URL("http://localhost/admin/content-pages/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-pages/create`


<!-- END_aed28521f968c6929da3a2b8efd6fef0 -->

<!-- START_79083f96a014977809b2c255b8bb6576 -->
## admin/content-pages
> Example request:

```bash
curl -X POST "http://localhost/admin/content-pages" 
```

```javascript
const url = new URL("http://localhost/admin/content-pages");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/content-pages`


<!-- END_79083f96a014977809b2c255b8bb6576 -->

<!-- START_192d445a5cd5c84ff2765bee2c7bf6d5 -->
## admin/content-pages/{content_page}
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-pages/1" 
```

```javascript
const url = new URL("http://localhost/admin/content-pages/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-pages/{content_page}`


<!-- END_192d445a5cd5c84ff2765bee2c7bf6d5 -->

<!-- START_92950d5a4b5c3f2e1fc1b609923d5b9d -->
## admin/content-pages/{content_page}/edit
> Example request:

```bash
curl -X GET -G "http://localhost/admin/content-pages/1/edit" 
```

```javascript
const url = new URL("http://localhost/admin/content-pages/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/content-pages/{content_page}/edit`


<!-- END_92950d5a4b5c3f2e1fc1b609923d5b9d -->

<!-- START_b7dd86eb773008def87ef33dfe89a183 -->
## admin/content-pages/{content_page}
> Example request:

```bash
curl -X PUT "http://localhost/admin/content-pages/1" 
```

```javascript
const url = new URL("http://localhost/admin/content-pages/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/content-pages/{content_page}`

`PATCH admin/content-pages/{content_page}`


<!-- END_b7dd86eb773008def87ef33dfe89a183 -->

<!-- START_a7aea7b85db9e7f33e05834a88165b39 -->
## admin/content-pages/{content_page}
> Example request:

```bash
curl -X DELETE "http://localhost/admin/content-pages/1" 
```

```javascript
const url = new URL("http://localhost/admin/content-pages/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/content-pages/{content_page}`


<!-- END_a7aea7b85db9e7f33e05834a88165b39 -->

<!-- START_a92a4de89705036dbd75523401d2a974 -->
## admin/content-pages/media
> Example request:

```bash
curl -X POST "http://localhost/admin/content-pages/media" 
```

```javascript
const url = new URL("http://localhost/admin/content-pages/media");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/content-pages/media`


<!-- END_a92a4de89705036dbd75523401d2a974 -->

<!-- START_f92290056075e11fb144fffc6abc3d77 -->
## admin/contacts/destroy
> Example request:

```bash
curl -X DELETE "http://localhost/admin/contacts/destroy" 
```

```javascript
const url = new URL("http://localhost/admin/contacts/destroy");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/contacts/destroy`


<!-- END_f92290056075e11fb144fffc6abc3d77 -->

<!-- START_1be0bb23154ecc61c2d481db6a1b9647 -->
## admin/contacts
> Example request:

```bash
curl -X GET -G "http://localhost/admin/contacts" 
```

```javascript
const url = new URL("http://localhost/admin/contacts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/contacts`


<!-- END_1be0bb23154ecc61c2d481db6a1b9647 -->

<!-- START_9290a447ec99cdbaef17d97a4b3f90ce -->
## admin/contacts/create
> Example request:

```bash
curl -X GET -G "http://localhost/admin/contacts/create" 
```

```javascript
const url = new URL("http://localhost/admin/contacts/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/contacts/create`


<!-- END_9290a447ec99cdbaef17d97a4b3f90ce -->

<!-- START_5ebd89303af5334837dde5dce9a68776 -->
## admin/contacts
> Example request:

```bash
curl -X POST "http://localhost/admin/contacts" 
```

```javascript
const url = new URL("http://localhost/admin/contacts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST admin/contacts`


<!-- END_5ebd89303af5334837dde5dce9a68776 -->

<!-- START_0ac776a4ac064576f42752f040b03a1b -->
## admin/contacts/{contact}
> Example request:

```bash
curl -X GET -G "http://localhost/admin/contacts/1" 
```

```javascript
const url = new URL("http://localhost/admin/contacts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/contacts/{contact}`


<!-- END_0ac776a4ac064576f42752f040b03a1b -->

<!-- START_f719c5c7a7b1e6da4f6785ad570bb940 -->
## admin/contacts/{contact}/edit
> Example request:

```bash
curl -X GET -G "http://localhost/admin/contacts/1/edit" 
```

```javascript
const url = new URL("http://localhost/admin/contacts/1/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET admin/contacts/{contact}/edit`


<!-- END_f719c5c7a7b1e6da4f6785ad570bb940 -->

<!-- START_a06c41ad57fbb67da9871a440e501125 -->
## admin/contacts/{contact}
> Example request:

```bash
curl -X PUT "http://localhost/admin/contacts/1" 
```

```javascript
const url = new URL("http://localhost/admin/contacts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT admin/contacts/{contact}`

`PATCH admin/contacts/{contact}`


<!-- END_a06c41ad57fbb67da9871a440e501125 -->

<!-- START_2640d48ceb9d5c2f6994a3de07e9c97c -->
## admin/contacts/{contact}
> Example request:

```bash
curl -X DELETE "http://localhost/admin/contacts/1" 
```

```javascript
const url = new URL("http://localhost/admin/contacts/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE admin/contacts/{contact}`


<!-- END_2640d48ceb9d5c2f6994a3de07e9c97c -->


