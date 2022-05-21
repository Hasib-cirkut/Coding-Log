---
Title: Cross Origin Resource Sharing
Description: What is CORS and Why everyone should know about it.
Author: Hasibul Huda
---

# CORS

Normally when we use AJAX to make asynchronous calls, we have to pass a URL param. By design AJAX doesn’t allow us to make network calls to different domain. But just so it happens, in modern web we use various API and services that are hosted all around the world. To make Ajax calls to these different domains we have to use a HTTP-header based mechanism called **Cross-Origin Resource Sharing(CORS).**

In layman’s term, browsers don’t like it when we request some resource from domain other than yours. So the ways we request resources like `fetch` or `XMLHttpRequest`, they follow the same-origin policy.

## Same origin Policy

Let’s say we have a URL

`http://js.marathon.com/`

Now let’s see which URL are considered same policy and which don’t.

- `http://js.marathon.com/page1.html` - Same origin - Only path is different
- `http://js.marathon.com/api/page2.html` - Same origin - Only path is different
- `https://js.marathon.com/api/page2.html` - Failed - Different Protocol. HTTPS instead of HTTP
- `https://js.marathon.com:81/api/page2.html` - Failed - Different Port.
- `https://ts.walking.com:81/api/page2.html` - Failed - Different domain.

# How does CORS work anyway?

So let’s say we want to access some resource that is outside of our domain. That resource providing server now needs to tell the browser that “The origin that is making this request is can take my resource, no problem”. Browser than understands it allows cross origin resource sharing.

1. Browser first sets the Origin header with the information of the origin.
2. On the server, when the request comes, the server needs to add an `Access-Control-Allow-Origin` header to the response object. The value of this header can be `*` which means “any origin is permitted to take my resource” or a specific domain.
3. When the response comes to browser, it first checks for `Access-Control-Allow-Origin` header, then the browser allows the data to be shared to the client site.

For security reasons, CORS error doesn’t show any information on why it got blocked.