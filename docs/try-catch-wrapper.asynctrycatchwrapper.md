<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@playerony/try-catch-wrapper](./try-catch-wrapper.md) &gt; [asyncTryCatchWrapper](./try-catch-wrapper.asynctrycatchwrapper.md)

## asyncTryCatchWrapper variable

try-catch wrapper for asynchronous functions

<b>Signature:</b>

```typescript
asyncTryCatchWrapper: <TData = unknown, TError = unknown>(toExecute: () => Promise<TData>, onError?: ((error: TError) => void) | undefined) => Promise<void | TData>
```
