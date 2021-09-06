import { tryCatchWrapper, asyncTryCatchWrapper } from '..';

describe('tryCatchWrapper Function', () => {
  it('should call onError callback when an error occurs', () => {
    const func = () => {
      throw new Error('test error');
    };

    const onError = jest.fn();
    tryCatchWrapper(func, onError);

    expect(onError).toHaveBeenCalled();
  });

  it('should not invoke onError function when it not passed', () => {
    const func = () => {
      throw new Error('test error');

      return 5;
    };

    expect(tryCatchWrapper(func)).not.toBeDefined();
  });

  it('should call passed function when an error does not occur', () => {
    const func = () => 5;

    expect(tryCatchWrapper(func)).toEqual(5);
  });
});

describe('asyncTryCatchWrapper Function', () => {
  it('should call onError callback when an error occurs', async () => {
    const func = async () =>
      new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('test error'));
        }, 200);
      });

    const onError = jest.fn();
    await asyncTryCatchWrapper(func, onError);

    expect(onError).toHaveBeenCalled();
  });

  it('should not invoke onError function when it not passed', async () => {
    const func = async () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('test error'));

          resolve(5);
        }, 200);
      });

    await expect(asyncTryCatchWrapper(func)).resolves.not.toBeDefined();
  });

  it('should call passed function when an error does not occur', async () => {
    const toExecute = async () => Promise.resolve(10);

    await expect(asyncTryCatchWrapper(toExecute)).resolves.toEqual(10);
  });
});
