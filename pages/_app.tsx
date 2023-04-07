import { Layout } from '@/layout/Layout';
import { SnackbarProvider } from '@/hooks/useSnackbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </SnackbarProvider>
  );
}
