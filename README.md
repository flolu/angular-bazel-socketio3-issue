# Socket.IO v3 Issue with Bazel + Angular

## Setup

```
yarn install
```

## Dev Server has Error

```
yarn client:dev
yarn server:dev
```

- error in the browser console http://localhost:4200

```
ERROR TypeError: decodePacket is not a function
    at Object.decodePayload (ts_scripts.js?v=89114305:17072)
    at XHR.onData (ts_scripts.js?v=89114305:15937)
    at Request.<anonymous> (ts_scripts.js?v=89114305:15559)
    at Request.Emitter.emit (ts_scripts.js?v=89114305:14385)
    at Request.onData (ts_scripts.js?v=89114305:15712)
    at Request.onLoad (ts_scripts.js?v=89114305:15768)
    at XMLHttpRequest.xhr.onreadystatechange [as __zone_symbol__ON_PROPERTYreadystatechange] (ts_scripts.js?v=89114305:15665)
    at XMLHttpRequest.P (zone.min.js?v=7uxoyio8:29)
    at e.invokeTask (zone.min.js?v=7uxoyio8:13)
    at Object.onInvokeTask (core.umd.js:28179)
```

## Production Works Fine

```
yarn client:prod
yarn server:prod
```

- no errors in the browser console http://localhost:8080
- connect and disconnect logs on the server
