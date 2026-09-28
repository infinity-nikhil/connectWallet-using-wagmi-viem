// components/Navbar.jsx
import { useConnection } from 'wagmi'
import { Connection } from './connection'
import { WalletOptions } from './wallet-options'

export default function Navbar() {
  const { isConnected } = useConnection()
  return (
    <nav>
      <div>My dApp</div>
      {isConnected ? <Connection /> : <WalletOptions />}
    </nav>
  )
}