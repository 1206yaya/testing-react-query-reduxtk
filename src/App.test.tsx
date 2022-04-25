import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App';
const queryClient =  new QueryClient({
  defaultOptions: {
      queries: {
          retry: false,
      },
  },
})

test('renders name text', async () => {
  const { findByText } = render(
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider></QueryClientProvider>

  );
  expect(await findByText(/name/i)).toBeInTheDocument();
});
