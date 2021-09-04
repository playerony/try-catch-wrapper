# try catch wrapper

![Lint](https://github.com/playerony/try-catch-wrapper/workflows/lint/badge.svg)
![Test](https://github.com/playerony/try-catch-wrapper/workflows/test/badge.svg)
![Build](https://github.com/playerony/try-catch-wrapper/workflows/build/badge.svg)
![Prettier](https://github.com/playerony/try-catch-wrapper/workflows/prettier/badge.svg)
![Typecheck](https://github.com/playerony/try-catch-wrapper/workflows/typecheck/badge.svg)
![Commitlint](https://github.com/playerony/try-catch-wrapper/workflows/commitlint/badge.svg)

Functional try-catch wrapper.

- [API Docs](https://playerony.github.io/try-catch-wrapper)

# Installation ([npm](https://www.npmjs.com/package/@playerony/try-catch-wrapper))

```
npm i @playerony/try-catch-wrapper
```

```
yarn add @playerony/try-catch-wrapper
```

# Usage

```js
import { tryCatchWrapper, asyncTryCatchWrapper } from '@playerony/try-catch-wrapper';

const onSuccess = () => console.log('success');

const asyncOnSuccess = async () => Promise.resolve(10);

const onError = () => console.log('error');

tryCatchWrapper(onSuccess, onError);

asyncTryCatchWrapper(asyncOnSuccess, onError);
```
