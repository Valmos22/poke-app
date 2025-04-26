import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createRoot } from 'react-dom/client';
import App from "./App";
import { PokemonProvider } from "./context/PokemonContext";
import './index.css';

import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { persistQueryClient } from '@tanstack/react-query-persist-client';

const queryClient = new QueryClient();

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
  maxAge: 1000 * 60 * 60 * 24, // Tiempo máximo para que los datos persistan (24 horas en milisegundos)
});

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <PokemonProvider>
    <App />
    </PokemonProvider>
  </QueryClientProvider>,
)
