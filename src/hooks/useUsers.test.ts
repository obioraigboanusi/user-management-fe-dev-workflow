import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/node';
import { useUsers } from './useUsers';
import { mockUsers } from '../mocks/users';
import { createQueryWrapper } from '../test/createQueryWrapper';

describe('useUsers Custom Hook', () => {
  it('should handle a successful API response correctly', async () => {
    // Render the custom hook within the test runner
    const { result } = renderHook(() => useUsers(), {
      wrapper: createQueryWrapper(),
    });

    // Check initial synchronous loading states
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeNull();

    // Wait for the asynchronous fetch operation to resolve
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // Verify the states updated perfectly with the API data
    expect(result.current.data).toEqual(mockUsers);
    expect(result.current.error).toBeNull();
  });

  it('should catch and process errors correctly when the API fails', async () => {
    // mocking rejection
    server.use(
      http.get('/api/users', () => {
        return new HttpResponse(null, { status: 500, statusText: 'Internal Server Error' });
      }),
    );

    // Render the hook
    const { result } = renderHook(() => useUsers(), {
      wrapper: createQueryWrapper(),
    });

    // Wait for the hook to exit its loading loop
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // 4. Assert: Verify the catch block generated a clean error string
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeDefined();
  });
});
