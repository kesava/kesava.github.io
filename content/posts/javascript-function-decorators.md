---
title: "Javascript Function Decorators"
date: "2024-01-01"
excerpt: "Exploring useful function decorators in JavaScript including unary, once, throttle, and debounce patterns that enhance function behavior without modifying the original code."
tags: ["javascript", "decorators", "functional-programming"]
author: "Kesava"
---

TC39 has an upcoming [proposal](https://github.com/tc39/proposal-decorators) for decorators, that decorates class methods. That is different from just decorating fucntions, which has been around forever.

Let's explore some useful function decorators in this post.

### `unary`
`unary` is a function decorator that makes it possible to invoke the function with only the first argument. This is useful when you need the function to be passed a method argument, where multiple arguments are passed to the argument function.

Here is an implementation -

```js
const unary = fn => (fn.length === 1) ? fn : function(firstParam) {
      return fn.call(this, firstParam);
};
```
Methods like `map`, `filter`, `forEach` all pass multiple arguments to the method argument.

So a call like `['first', 'second'].forEach(console.log)` is essentially equivalent to `['first', 'second'].forEach((ele, ind, list) => console.log(ele, ind, list))`.

You can decorate `console.log` function with `unary`, so `console.log` will ignore the second and third arguments.

```js
['first', 'second'].forEach(unary(console.log));
// 'first'
// 'second'
```

### `once`

`once` decorates the function by making sure it is executed only once, in spite of getting invoked multiple times.

Here is a implementation -

```js
const once = fn => {
  let done = false;
  const noop = () => {};
  return (...args) => done ? noop.call() : (done = true, fn.apply(null, args));
};
```

Now, when you decorate a function with `once`, any further invocation after the first invocation of the decorated function will result in a no-operation call.

```js
const initMethod = () => console.log('Initializing the process';
const init = once(initMethod);
init();
// Initializing the process
init();
// no-op call, no output
```

### `throttle`

`throttle` decorates the function to wait till the given duration, before any subsequent invocations. The following is a simple diagram to explain what goes in with throttling. The first action is executed, but all subsequent invocations till the duration expires, all simply ignored.

```ascii
                              throttle
+1+ +2+ +3+ +4+ +5+ +6+     +-------------->   +1+             +5+
+---duration---+                               +---duration--+ +---duration--+
```

Here is a sample implementation -

```js
const throttle = (fn, duration) => {
  let shouldTheFnWait = false;
  return function(...args) {
    if (!shouldTheFnWait) {
      fn.apply(this, args);
    } else {
      setTimeout(() => { shouldTheFnWait = true; }, duration);
    }
  }
};
```
```js
const testFn = () => console.log('print here?');
const decoratedTestFn = throttle(testFn, 1000);
decoratedTestFn(); // print here?
decoratedTestFn(); // nothing happens
setTimeout(decoratedTestFn, 1000); // print here, again as 1 second of throttle has elapsed.
```

### `debounce`
`debounce` decorates the function to space out the funciton invocations with the given duration. The following is a diagram to illustrate it. A burst of function invocations received are spaced out with the given duration.

```ascii
                        debounce
+1+ +2+ +3+ +4+ +5+    +-------------->               +1+                +5+
+---duration---+                         +---duration---+   +---duration---+
```

Here is a sample implementation -

```js
const debounce = (causeFn, duration) => {
  let timeout;
  return function(...args) {
    let effectFn = () => {
      timeout = null;
      causeFn.apply(this, args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(effectFn, duration);
  }
};
```
```js
const testFn = () => console.log('print here?');
const decoratedTestFn = debounce(testFn, 1000);
decoratedTestFn(); // print here? after 1 second
decoratedTestFn(); // nothing happens
setTimeout(decoratedTestFn, 1000); // print here, again as 1 second of throttle has elapsed.
```
