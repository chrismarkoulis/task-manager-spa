import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return the initial value if localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'default'));
    const [value] = result.current;
    expect(value).toBe('default');
  });

  it('should retrieve a stored value from localStorage', () => {
    localStorage.setItem('testKey', JSON.stringify('storedValue'));
    const { result } = renderHook(() => useLocalStorage('testKey', 'default'));
    const [value] = result.current;
    expect(value).toBe('storedValue');
  });

  it('should update the localStorage value when setValue is called', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'default'));
    const [, setValue] = result.current;
    act(() => {
      setValue('newValue');
    });
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('newValue'));
    const [value] = result.current;
    expect(value).toBe('newValue');
  });

  it('should handle invalid JSON in localStorage gracefully', () => {
    localStorage.setItem('testKey', 'invalid json');
    const { result } = renderHook(() => useLocalStorage('testKey', 'default'));
    const [value] = result.current;
    expect(value).toBe('default');
  });

  it('should accept a function to update the value', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 5));
    const [, setValue] = result.current;
    act(() => {
      setValue((prev) => prev + 5);
    });
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify(10));
    const [value] = result.current;
    expect(value).toBe(10);
  });
});
