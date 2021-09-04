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

  it('should call passed function when an error does not occur', () => {
    const func = () => 5;

    expect(tryCatchWrapper(func)).toEqual(5);
  });
});

describe('asyncTryCatchWrapper Function', () => {
  it('should call onError callback when an error occurs', () => {
    const func = () => {
      throw new Error('test error');
    };

    const onError = jest.fn();
    asyncTryCatchWrapper(func, onError);

    expect(onError).toHaveBeenCalled();
  });

  it('should call passed function when an error does not occur', async () => {
    const toExecute = async () => Promise.resolve(10);

    await expect(asyncTryCatchWrapper(toExecute)).resolves.toEqual(10);
  });
});
