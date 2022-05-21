---
Title: JSON Web Token
Description: What is JSON Web Token and how it works internally.
Author: Hasibul Huda
---

# Json Web Token(JWT)

Json Web Token or JWT for short is a self-contained way for transmitting information in JSON object securely between parties. JWTs can be signed so they can be verified and trusted. Algorithms like `HMAC` can be used to sign JWT with a secret or a private/public key pair using RSA.

Authorization is the most common use case for JWT. Once the user logs in, each request made by user will include a JWT, which will allow user to access services, routes permitted with that token.

## JWT Structure

A JWT has three parts separated by dots(`.`). They are,

- Header
- Payload
- Signature

### Header

The header has two parts: the type of the token which is `*jwt*` and the signing algorithm that is used.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}

//snippet from  jwt.io
```

Then, the json is Base64Url encoded to form the first part of the JWT.

### Payload

The payload contains claims which are statements about an entity e.g. the user and additional data.

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}

//snippet from  jwt.io
```

> Although payload is signed so it’s not tamperable, it can be read by anyone. So putting any secret information in payload isn’t advised unless the information is encrypted.
> 

### Signature

The signature part consists of `base64UrlEncode(header)`, `base64UrlEncode(payload)` and a secret. We have to use the algorithm specified in the header like this,

```json
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

Altogether we get a three Base64Url strings separated by dots that can be easily passed in between parties.

# Auth workflow using JWT

Let’s say we have a user who wants to register and use our website. So for the first time he/she registers using username, passwords and other info such as emails, first name etc. After all the information is provided, they click submit, which uses a HTTPS POST method to transfer the information from our frontend application to our backend application. 

1. Our backend application catches the request, checks with the DB, if all is okay then a new JWT token with a payload containing the necessary user identifier and an expiration timestamp.
2. The backend that takes a `secret key` and signs the JWT header and payload and sends it back to frontend.
3. Then the frontend takes the JWT and starts to use it in every HTTP request to the server.
4. Because the `secret key` is only known to the backend application, when a HTTP request comes to backend, it checks the JWT signature and makes sure the user is indeed someone who was signed by the backend during user registration. 

A signed JWT look similar to this,

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

If we notice, we can see that our JWT is dot(`.`) separated. As we have discussed earlier, the first part of the JWT is the JWT header.

```
JWT HEADER: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

The second part or the middle part is the JWT payload.

```
JWT PAYLOAD : eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9
```

and the third or the last part is the JWT signature.

```
JWT SIGNATURE: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

Our backend application added a JSON object as header and payload and then encoded them with Base64Url. This is done because different computers and os around the world use different character encodings. So a string for SEA might turn into different string in NA because of difference in character encodings. So to ensure that our string doesn’t change along the way, Base64 was born that chooses the subset of characters that are handled the same way by all the encodings.

So one big question still arises. If our encoded JWT can be read by anyone listening to the network, how is it secure? Well, during the creation of the JWT, the backend encrypts the signature with a `secret key` using a hashing function such as `SHA256`. This makes it mathematically impossible for someone to break the signature and get the `secret key`. Thus only the backend application can verify the JWT. But how? The answer lies in the hashing function itself. Let’s understand it a bit.

## Hashing Function

Well what is it? So a hashing function is unique function with some unique characteristics. 

1. **A hashing function is irreversible(One way function)**
    
    A hashing function is irreversible in nature. Meaning for some input we’ll get some output but not vice versa. For the same output we’ll never the get the inputs. One very simple example of an irreversible function is a function that multiplies two numbers. 
    
    **`f(x, y) = xy`.** The multiplication is easy, but to get the factors from the the multiplicative sum is can’t be solved in polynomial time.
    
2. **A hashing function is deterministic**
    
    A deterministic function is a function that, for every invocation it will return the same result for the same given input. A multiplication function is a deterministic function because for the same inputs it’ll return the same output every time the function is called.
    
3. **A hashing function returns a unique output**
    
    For a different input every time,  a hashing function will return a different output for that given input. That means no two input in a hashing function will ever result in a same output.
    
4. **A hashing function is chaotic in nature**
    
    What I mean by hashing function being chaotic is that, even a change to on alphabet of the input of the function will result in a completely different output which will not be remotely similar to the output before changing the characters. This makes the hashing function unaffected to incremental approximation methods. 
    
    Let me show what I mean. Let’s say we want to create a hash using SHA256 hash algorithm for a secret key. Let’s say the key is: “case”. We can use various online tool to easily create a hash using SHA256. I’ll use this site. [https://passwordsgenerator.net/sha256-hash-generator/](https://passwordsgenerator.net/sha256-hash-generator/)
    
    ```
    BBFCD4160A1E8674DAC62292AE48BE4785262AD7078F9EC11B74A254CE70FA06 
    ```
    
    You can use any website you want. Every one of them will generate the same hash for the `secret key` of “case” because **a hashing function is deterministic**. 
    
    Now let’s say we want change the first character of the secret key from “c” to “b”. That means our new secret key is “base”. Let’s try to create a hash using this one.
    
    ```
    CAE662172FD450BB0CD710A769079C05BFC5D8E35EFA6576EDC7D0377AFDD4A2
    ```
    
    If we notice, the two hashes are vastly different even though we only changed on characters in the secret key. Same way when a user registers, the signature of the JWT is hashed using a hashing function with `JWT.header + JWT.payload + secret key`. This is why when the signature is exposed to the attacker or the person who intercepted the network, they can’t decrypt the signature because **a hash function is a one way function**.
    
    So when a network request from frontend application(user browser) comes to backend application with a JWT, the backend application take the same payload and the secret key and passes it to the hash function. The new hash is then compared with the users hash to validate the user request.
    
    ## Drawbacks
    
    1. Only one secret key:
        
        A lot of JWT depends on only one secret key, which poorly handled by administrator or developers can lead to severe consequences.
        
    2. Data overhead:
        
        The sizes of JWT tokens are longer than normal tokens by design. When more information is added to the payload of JWT, it can be a point of data overhead.
        
    3. Can’t manage client from the server:
        
        Sometimes, the server may want to automatically logout the client, but with JWT it can’t because jwt is stateless.