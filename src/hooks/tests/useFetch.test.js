import { renderHook, act } from '@testing-library/react';
import axios from 'axios';
import { useFetch } from '../useFetch';

jest.mock('axios');

describe('useFetch', () => {
  it('should initialize with null data, false loading, and null error', () => {
    const { result } = renderHook(() => useFetch());

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should set loading to true and fetch data successfully', async () => {
    const mockData = [{ id: 1, title: 'Test Todo' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    const { result, waitForNextUpdate } = renderHook(() => useFetch());
    
    act(() => {
      result.current.fetchData('https://jsonplaceholder.typicode.com/todos');
    });

    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it('should set error if fetch fails', async () => {
    const errorMessage = 'Network error';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() => useFetch());

    act(() => {
      result.current.fetchData('https://jsonplaceholder.typicode.com/todos');
    });

    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe(`Error: ${errorMessage}`);
  });

  it('should call fetchData with parameters', async () => {
    const mockData = [{ id: 1, title: 'Test Todo' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    const { result, waitForNextUpdate } = renderHook(() => useFetch());

    act(() => {
      result.current.fetchData('https://jsonplaceholder.typicode.com/todos', { userId: 1 });
    });

    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos', { params: { userId: 1 } });
  });
});
