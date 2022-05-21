---
Title: Useful HTTP Methods
Description: Brief summery of HTTP Methods
Author: Hasibul Huda
---

# HTTP Methods

HTTP defines a set of request methods that are called *HTTP verbs*. These are methods that indicates that a desired action is needed.

## GET

The HTTP `GET` method is used for requesting data. Although not prohibited but it’s good practise to avoid sending payload in `GET` requests.

> HTTP `GET` methods are safe, Idempotent, Cacheable, allowed in HTML forms and successful response of `GET` methods have body.
> 

```jsx
GET /index.html
```

## POST

The HTTP `POST` sends data to the server. A POST request is typically sent via an HTML form. The content type of the payload is selected by setting the `enctype`  of the HTML form. Content-types can be:

- `application/x-www-form-urlencoded`: The payload is key-value paired tuples separated by `&` and `=` between the key and the value. It’s not suitable for binary data.
- `multipart/form-data`: Each value is sent as a block of data.
- `text/plain`

> HTTP `POST` method aren’t safe, Idempotent. Request of `POST` has body and successful response also has body. They are allowed in HTML FORMS.
> 

```jsx
POST /test HTTP/1.1
Host: foo.example
Content-Type: application/x-www-form-urlencoded
Content-Length: 16

name=john&age=42
```

## DELETE

The HTTP `DELETE` deletes a specified resource. 

> HTTP `DELETE` method aren’t safe, cacheable, allowed in HTML forms. They are idempotent. Request of `DELETE` may have body and successful response may also have body.
> 

```jsx
DELETE /file.html HTTP/1.1
```

## PUT

The HTTP `PUT` is similar to HTTP `POST` but `PUT` is idempotent meaning calling it once or several times will have the same effect whereas successive identical `POST` call may have side effects. 

> HTTP `PUT` method aren’t safe, cacheable, allowed in HTML forms. They are idempotent. Request of `PUT`  has body but successful response doesn’t contain body.
> 

```jsx
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>

//snippet from MDN
```

## PATCH

The HTTP `PATCH` is sometimes compared to update in `CRUD`. A `PATCH` request modifies the resource partially compared to `PUT` which completely overwrites the resource.

> HTTP `PATCH` isn’t safe, idempotent, cacheable and not allowed in HTML Forms. A `PATCH` request can be idempotent sometimes but not always. It’s request has body and successful response also has body.
> 

```
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
```