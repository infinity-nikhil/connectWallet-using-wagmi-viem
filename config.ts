import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains' //for now we don't need this 
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { anvil } from "./src/utils/chain"

export const config = createConfig({
  chains: [anvil],
  connectors: [
    injected(),
    metaMask(),
    safe(),
  ],
  transports: {
[anvil.id]: http("http://127.0.0.1:8545"),
  },
})

//Also change the file for config ...but i would recommend ki ask Claude 
//Here we only made a custom chain.ts cause anvil fork would be a local blockchain 
//In most of the cases you won't need chain.ts just import the chain from wagmi