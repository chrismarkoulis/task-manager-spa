import { renderHook, act } from '@testing-library/react';
import { useSuggestions } from '../useSuggestions';
import { useFetch } from '../useFetch';

jest.mock('../useFetch');

describe('useSuggestions', () => {
  it('should update suggestions when getSuggestions is called', async () => {
    useFetch.mockReturnValue({
      data: [{ id: 1, title: 'Test Suggestion' }],
      loading: false,
      error: null,
      fetchData: jest.fn(),
    });

    const { result, waitForNextUpdate } = renderHook(() => useSuggestions());

    act(() => {
      result.current.getSuggestions('Test');
    });

    await waitForNextUpdate();

    expect(result.current.suggestions).toEqual([{ id: 1, title: 'Test Suggestion' }]);
  });

  it('should handle errors when API request fails', async () => {
    useFetch.mockReturnValue({
      data: null,
      loading: false,
      error: 'API error',
      fetchData: jest.fn(),
    });

    const { result, waitForNextUpdate } = renderHook(() => useSuggestions());

    act(() => {
      result.current.getSuggestions('Test');
    });

    await waitForNextUpdate();

    expect(result.current.error).toBe('API error');
  });
});
