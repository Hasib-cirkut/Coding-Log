---
Title: Browsers Request and Response Object. 
Description:
Author: Hasibul Huda
---

# Request and Response Object

## Request Object

The request object is used to describe a API request to a server. A request object can be created using the Request() constructor but it’s most often found in a API call. The object may have these properties.

- body: The data to send with the request. Can be a Blob, FormData, String etc.
- headers: The HTTP headers to send with the request.
- method: The HTTP method such as `GET`, `POST`, `PUT` etc.
- mode: Contains request mode such as `cors`, `no-cors`, `same-origin` etc.

Request object also has methods we can use.

- blob(): Returns a promise that resolves with a Blob representation of the request body.
- json(): Returns a promise that resolves with a json representation of the request body.
- formData(): Returns a promise that resolves with a formData representation of the request body.

We can create a request using the `Request()` constructor and

```jsx
const request = new Request('https://www.mozilla.org/favicon.ico');

const url = request.url;
const method = request.method;
const credentials = request.credentials;

//snippet from mdn
```

## Response Object

The Response object represents the response to a request. We can create a response using the `Response()` constructor, but most of the time, response will come from the server. The Response object has some properties and methods we can use. 

- body : The body that was returned from the server.
- headers : The headers associated with the response.
- status : The status code of the response.
- type : The type of the response.
- url : The URL of the response.
- blob() : Returns a promise that resolves with a Blob representation of the response body.
- json() : Returns a promise that resolves with a JSON representation of the response body.