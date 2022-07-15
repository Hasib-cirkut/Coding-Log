---
Title: When not to use the Bang(!) operator.
Description: Most of the times, we blindly rely on bang operator when we expect truthy or falsey value. Here's why this is not a good idea.
Author: Hasibul Huda
---

> Most of the times, we blindly rely on bang operator when we expect truthy or falsey value.
>
> Here's why this is not a good idea.

While developing, we often have to use conditional statements to control the flow of our application. So a common syntax that is popular among developers is the following one.

```jsx
if (isOpen) {
  /* code if something is open */
}
```

Here, the `if` statement depends on the value of `isOpen`. By observing the name, it seems that `isOpen` is of type `Boolean`. So, if `isOpen` resolves to `true`, the above code block will run. Following this pattern of concise writing, the following syntax is also popular among developers.

```jsx
if (!isOpen) {
  /* code if something is NOT open */
}
```

So the above code block will run when `!isOpen` will resolve to `true`. Now that’ll happen when `isOpen` is `false`. This is because of the Bang operator(!). It’s `logical not` operator in many languages including JavaScript.

Most of the times, it’s okay to use them except when you want complete control over your code. What am I talking about? Let me give you a real life example I have faced while developing.

So to draw the scenario first, let’s say you are developing a form that has a phone number component. The phone number component provides your two values.

1. The input value. (So what your type in)
2. If the input is valid or not.

So the object you’d get back looks like this.

```jsx
{
	number: null,
	valid: undefined
}
```

And when you’d give it a valid phone number it would be like this.

```jsx
{
	number: "01521222333",
	valid: true
}
```

If the number is not valid, then the value of the `valid` property would be `false`.

Now, your job is to create a dynamic validation on this component using the object that is returned by the phone number component.

And the requirements are,

- No validation message will be shown initially and when the number is valid.
- The validation message will be “Invalid Number” when the number is not valid.

So you write this piece of code.

```jsx
if (!phoneNumberEvent.valid) {
  this.validationMessage = "Invalid Number";

  return;
}

this.validationMessage = null;
```

Seems straightforward right? If `phoneNumberEvent.valid` is `false`, then we will show the validation message. Otherwise, not.

Well no.

The above piece of code will show validation message even when there is no input initially. This is because of how JS evaluates `non boolean` entities inside of conditionals.

In JavaScript, `0, null, undefined, NaN` will return `falsey`. So a bang operator before them would be `truthy`. This is what happens when initially the phone number component has no value and the value of `valid` property is undefined. We are basically doing this,’

```jsx
if (!undefined) {
  // <-- phoneNumberEvent.valid is undefined
  this.validationMessage = "Invalid Number";

  return;
}
```

And, `!undefined` is `true`, because, undefined returns `falsey` in JS.

So more appropriate solution in this context would be to use direct comparison between what you want your value to be rather than blindly depending on the bang operator.

```jsx
if (phoneNumberEvent.valid === false) {
  this.validationMessage = "Invalid Number";

  return;
}
```

This comparison is more inline with what we want. This way, initially there’ll be no error. And then, whenever the `phoneNumberEvent.valid` becomes false, an appropriate error will be shown.
