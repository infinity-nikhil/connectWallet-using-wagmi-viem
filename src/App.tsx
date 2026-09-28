import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useConnection } from 'wagmi'
import { config } from './config'
import { Connection } from './connection'
import { WalletOptions } from './wallet-options'

const queryClient = new QueryClient()

function ConnectWallet() {
  const { isConnected } = useConnection()
  if (isConnected) return <Connection />
  return <WalletOptions />
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <ConnectWallet />
      </QueryClientProvider> 
    </WagmiProvider>
  )
}

export default App;