import { server } from './src/mocks/node';
import { beforeAll, afterAll, afterEach } from 'vitest';
import '@testing-library/jest-dom';

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset any request handlers that are declared as a part of our tests (i.e. for testing one-time error scenarios)
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
