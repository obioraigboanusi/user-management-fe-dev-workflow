import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

// Warn for unhandled requests
worker.events.on('request:unhandled', ({ request }) => {
  console.warn('MSW saw this request but had no matching handler:', request.url);
});
