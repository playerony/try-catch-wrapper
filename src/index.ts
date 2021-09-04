/**
 * @packageDocumentation Functional try-catch wrapper.
 */

/**
 * try-catch wrapper for synchronous functions
 *
 * @param toExecute - synchronous function to execute inside of try-catch
 * @param onError - synchronous function to execute when an error occurs
 *
 * @public
 */
export const tryCatchWrapper = <TData = unknown, TError = unknown>(
  toExecute: () => TData,
  onError?: (error: TError) => void,
): TData | void => {
  try {
    return toExecute();
  } catch (error: unknown) {
    if (onError) {
      // @ts-expect-error
      onError(error);
    }
  }
};

/**
 * try-catch wrapper for asynchronous functions
 *
 * @param toExecute - asynchronous function to execute inside of try-catch
 * @param onError - asynchronous function to execute when an error occurs
 *
 * @public
 */
export const asyncTryCatchWrapper = async <TData = unknown, TError = unknown>(
  toExecute: () => Promise<TData>,
  onError?: (error: TError) => void,
): Promise<TData | void> => {
  try {
    return await toExecute();
  } catch (error: unknown) {
    if (onError) {
      // @ts-expect-error
      onError(error);
    }
  }
};
