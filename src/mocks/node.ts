import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import '@testing-library/jest-dom/vitest';

export const server = setupServer(...handlers);
