<h3 align="center">universal-promise-all</h3>

The Function allows you to work with Promise.all, how with forkJoin from rxjs.
universal-promise-all supports not only arrays, but also objects.

---

## Requirements
universal-promise-all (target ES5) use arrow function and Object.(entries/fromEntries). Therefore, in some cases, es2019 polyfills are necessary.

## Usage example (Typescript):
```javascript
import universalPromiseAll from "universalPromiseAll";

const promiseObj = {
  bol: Promise.resolve(true),
  num: Promise.resolve(10),
};

universalPromiseAll(promiseObj).then(console.log); // {bol: true, num: 10}

```
## License
Public domain [Unlicense][unlicense]

[unlicense]: http://unlicense.org/