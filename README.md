# Socket.IO v3 Issue with Bazel + Angular

I had the same issue when working with Socket.IO v2. **But the [old solution](https://stackoverflow.com/a/62314197/8586803) doesn't work anymore.**

## Setup

```
yarn install
```

## Dev Server Issue

```
yarn dev
```

Results in this error in the browser console (http://localhost:4200)

```
ERROR Error: Uncaught (in promise): TypeError: XMLHttpRequest is not a constructor
TypeError: XMLHttpRequest is not a constructor
    at ts_scripts.js?v=80175740:15476
    at Object.14.../globalThis (ts_scripts.js?v=80175740:15480)
```

## Production Issue

```
yarn client
```

Results in this error in the browser console (http://localhost:8080)

```
ERROR Error: Uncaught (in promise): ReferenceError: Cannot access 'e' before initialization
ReferenceError: Cannot access 'e' before initialization
    at home.module-7db83ffb.js:formatted:953
```
