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

#Contact management

APIs for managing contacts
<!-- START_2320936f7c7a29fe1b1faf0be6fee8ef -->
## Fetch the list of all contacts

This api route return all the contacts in the database without the deleted one

> Example request:

```bash
curl -X GET -G "/api/v1/contacts" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/contacts");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
## Store a contact request inside the database and send email to the administrators

The email functionality

> Example request:

```bash
curl -X POST "/api/v1/contacts" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M" \
    -H "Content-Type: application/json" \
    -d '{"subject":"quis","message":"velit","email":"voluptas"}'

```

```javascript
const url = new URL("/api/v1/contacts");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
    "Content-Type": "application/json",
    "Accept": "application/json",
}

let body = {
    "subject": "quis",
    "message": "velit",
    "email": "voluptas"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/contacts`

#### Body Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    subject | string |  required  | The subject of the contact form.
    message | string |  required  | The message of the contact form.
    email | required |  optional  | string The user email who submitted the contact form

<!-- END_47c2efeaf62c42ca6aab8e676b494b40 -->

<!-- START_b77d96849f13e518dd79c7801a8f0854 -->
## Fetch 1 contact per contact id

This functionality is to be used in the admin panel <br/>
For the {contact} pass the contact id

> Example request:

```bash
curl -X GET -G "/api/v1/contacts/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/contacts/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
## Update a contact request inside the database

This functionality is to be used in the admin panel <br/>
For the {contact} pass the contact id

> Example request:

```bash
curl -X PUT "/api/v1/contacts/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M" \
    -H "Content-Type: application/json" \
    -d '{"subject":"animi","message":"ab","email":"inventore"}'

```

```javascript
const url = new URL("/api/v1/contacts/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
    "Content-Type": "application/json",
    "Accept": "application/json",
}

let body = {
    "subject": "animi",
    "message": "ab",
    "email": "inventore"
}

fetch(url, {
    method: "PUT",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/contacts/{contact}`

`PATCH api/v1/contacts/{contact}`

#### Body Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    subject | string |  required  | The subject of the contact form.
    message | string |  required  | The message of the contact form.
    email | required |  optional  | string The user email who submitted the contact form

<!-- END_9aec7381d4dd89e68a9ff728678d8b21 -->

<!-- START_6edc54ea34dd384c52c2ab85854ca8a2 -->
## Partially delete a contact request inside the database

This functionality is to be used in the admin panel <br/>
For the {contact} pass the contact id

> Example request:

```bash
curl -X DELETE "/api/v1/contacts/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/contacts/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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

#User management

APIs for managing users
<!-- START_1aff981da377ba9a1bbc56ff8efaec0d -->
## Fetch the list of all users

This api route return all the users in the database without the deleted one

> Example request:

```bash
curl -X GET -G "/api/v1/users" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/users");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
## Store a new user inside the database

> Example request:

```bash
curl -X POST "/api/v1/users" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M" \
    -H "Content-Type: application/json" \
    -d '{"first_name":"est","last_name":"quibusdam","middle_name":"ducimus","email":"quo","password":"eum","roles":[9]}'

```

```javascript
const url = new URL("/api/v1/users");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
    "Content-Type": "application/json",
    "Accept": "application/json",
}

let body = {
    "first_name": "est",
    "last_name": "quibusdam",
    "middle_name": "ducimus",
    "email": "quo",
    "password": "eum",
    "roles": [
        9
    ]
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/v1/users`

#### Body Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    first_name | string |  required  | The first name of the registered user.
    last_name | string |  required  | The last name of the registered user.
    middle_name | string |  required  | The middle name of the registered user.
    email | string |  required  | The email of the registered user.
    password | string |  required  | The password of the registered user.
    roles | array |  required  | The set of roles of the registered user, it accepts 1 to many roles.
    roles.* | integer |  required  | The role id of the registered user.

<!-- END_4194ceb9a20b7f80b61d14d44df366b4 -->

<!-- START_cedc85e856362e0e3b46f5dcd9f8f5d0 -->
## List the details of 1 user by user id &lt;br/&gt;
 /api/v1/users/{user} where user is an integer

> Example request:

```bash
curl -X GET -G "/api/v1/users/2" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/users/2");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
## Update an existing user inside the database

> Example request:

```bash
curl -X PUT "/api/v1/users/2" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M" \
    -H "Content-Type: application/json" \
    -d '{"first_name":"est","last_name":"vel","middle_name":"animi","email":"sunt","password":"dicta","roles":[12]}'

```

```javascript
const url = new URL("/api/v1/users/2");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
    "Content-Type": "application/json",
    "Accept": "application/json",
}

let body = {
    "first_name": "est",
    "last_name": "vel",
    "middle_name": "animi",
    "email": "sunt",
    "password": "dicta",
    "roles": [
        12
    ]
}

fetch(url, {
    method: "PUT",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/v1/users/{user}`

`PATCH api/v1/users/{user}`

#### Body Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    first_name | string |  required  | The first name of the registered user.
    last_name | string |  required  | The last name of the registered user.
    middle_name | string |  required  | The middle name of the registered user.
    email | string |  required  | The email of the registered user.
    password | string |  required  | The password of the registered user.
    roles | array |  required  | The set of roles of the registered user, it accepts 1 to many roles.
    roles.* | integer |  required  | The role id of the registered user.

<!-- END_296fac4bf818c99f6dd42a4a0eb56b58 -->

<!-- START_22354fc95c42d81a744eece68f5b9b9a -->
## Completely delete user by providing 1 user id per time
 /api/v1/users/{user} where user is an integer

> Example request:

```bash
curl -X DELETE "/api/v1/users/2" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/users/2");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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

#general
<!-- START_bd2777b2132db6c9cf93e928b5b5e44d -->
## api/v1/permissions
> Example request:

```bash
curl -X GET -G "/api/v1/permissions" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/permissions");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X POST "/api/v1/permissions" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/permissions");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/permissions/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/permissions/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X PUT "/api/v1/permissions/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/permissions/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X DELETE "/api/v1/permissions/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/permissions/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/roles" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/roles");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X POST "/api/v1/roles" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/roles");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/roles/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/roles/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X PUT "/api/v1/roles/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/roles/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X DELETE "/api/v1/roles/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/roles/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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

<!-- START_25bf4092f5e200124a149897733aac34 -->
## api/v1/orders
> Example request:

```bash
curl -X GET -G "/api/v1/orders" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/orders");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X POST "/api/v1/orders" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/orders");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/orders/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/orders/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
    "message": "No query results for model [App\\Order] 1"
}
```

### HTTP Request
`GET api/v1/orders/{order}`


<!-- END_b4bbc4b1b4c4ddc2effe9e5e2475dd8d -->

<!-- START_2e6d997181b1c50b2b94eaa14b66f016 -->
## api/v1/orders/{order}
> Example request:

```bash
curl -X PUT "/api/v1/orders/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/orders/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X DELETE "/api/v1/orders/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/orders/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/items-types" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/items-types");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X POST "/api/v1/items-types" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/items-types");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/items-types/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/items-types/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
`GET api/v1/items-types/{items_type}`


<!-- END_7f5477ca19e3164647bccc1d1d38c139 -->

<!-- START_4106c27b20bac006382e473a83c750f6 -->
## api/v1/items-types/{items_type}
> Example request:

```bash
curl -X PUT "/api/v1/items-types/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/items-types/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X DELETE "/api/v1/items-types/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/items-types/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/order-items" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/order-items");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X POST "/api/v1/order-items" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/order-items");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/order-items/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/order-items/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X PUT "/api/v1/order-items/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/order-items/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X DELETE "/api/v1/order-items/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/order-items/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/content-categories" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-categories");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X POST "/api/v1/content-categories" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-categories");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/content-categories/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-categories/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X PUT "/api/v1/content-categories/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-categories/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X DELETE "/api/v1/content-categories/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-categories/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/content-tags" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-tags");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X POST "/api/v1/content-tags" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-tags");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/content-tags/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-tags/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X PUT "/api/v1/content-tags/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-tags/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X DELETE "/api/v1/content-tags/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-tags/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/content-pages" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-pages");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X POST "/api/v1/content-pages" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-pages");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X GET -G "/api/v1/content-pages/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-pages/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X PUT "/api/v1/content-pages/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-pages/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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
curl -X DELETE "/api/v1/content-pages/1" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/v1/content-pages/1");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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

<!-- START_c3fa189a6c95ca36ad6ac4791a873d23 -->
## api/login
> Example request:

```bash
curl -X POST "/api/login" \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M"
```

```javascript
const url = new URL("/api/login");

let headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
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


