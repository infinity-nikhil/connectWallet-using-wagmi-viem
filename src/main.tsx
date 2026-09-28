import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { config } from '../config.ts'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </WagmiProvider>
)

//Not much modification from the docs but this is how we wrap the application