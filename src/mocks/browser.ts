import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

// listeners to your worker file to watch it in the browser console
worker.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url);
});

worker.events.on('request:unhandled', ({ request }) => {
  console.warn('MSW saw this request but had no matching handler:', request.url);
});
