# Socket.IO v3 Issue with Bazel + Angular

## Setup

```
yarn install
```

## Dev Server Works

```
yarn dev
```

Works fine after patching the `engine.io-client` package like in [this solution](ttps://stackoverflow.com/a/62314197/8586803).

## Production

```
yarn prod
```

Results in this error in the browser console (http://localhost:8080)

```
ERROR Error: Uncaught (in promise): ReferenceError: Cannot access 'XMLHttpRequest' before initialization
ReferenceError: Cannot access 'XMLHttpRequest' before initialization
    at home.module-34ce03d7.js:2491
    at home.module-34ce03d7.js:2494
```
