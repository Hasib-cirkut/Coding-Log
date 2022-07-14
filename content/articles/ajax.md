---
Title: Asynchronous JavaScript and XML
Description: What is Ajax and How to use it.
Author: Hasibul Huda
---

## AJAX

Ajax stands for Asynchronous javascript and XML. So what is it?

It’s actually a term that describes a new approach of using a number of existing technologies together such as HTML, CSS, JS, DOM, XML and XMLHttpRequest together to make quick updates to the user interface without reloading the entire browser page. This makes the application a lot more responsive.

Two major feature of AJAX is:

1. It can make asynchronous request to the server without reloading the page
2. Receive and work with data from the server.

The key thing that makes Ajax so good and popular is the use of XMLHttpRequest object.

## XMLHttpRequest

XMLHttpRequest(XHR) object are used to interact with servers. By using them we can retrieve data from server asynchronously without doing a full refresh.

In order to make ajax call, we first need to make create an instance of XMLHttpRequest.

```jsx
const httpRequest = new XMLHttpRequest();
```

Now we need to attach a function that will handle the response after we send a request.

```jsx
httpRequest.onreadystatechange = handleResponse();
```

After that we need to call the `open()` method and `send()` method.

1. The first parameter to the `open()` method is the HTTP Verb.
2. The second parameter is the URL we are sending our requests to. We can’t call a third party domain for security purposes.
3. The third parameter is a boolean value. Setting it to `true` will make the request asynchronous.

And the `send()` method will contain any data if our HTTP method is `post`.

```jsx
httpRequest.open("GET", "http://www.example.org/some.file", true);
httpRequest.send();

//snippet from mdn
```

After the request is sent, the `handleResponse()` function should do is check the request’s state. If the full server response was received then the value state will have the value of `XMLHttpRequest.DONE(4)`

```jsx
if (httpRequest.readyState === XMLHttpRequest.DONE) {
  // Everything is good, the response was received.
} else {
  // Not ready yet.
}

//snippet from mdn
```

After than we have to check the HTTP response code.

```jsx
if (httpRequest.status === 200) {
  // Perfect!
} else {
  // There was a problem with the request.
  // For example, the response may have a 404 (Not Found)
  // or 500 (Internal Server Error) response code.
}

//snippet from mdn
```
