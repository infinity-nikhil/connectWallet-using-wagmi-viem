import { useConnection, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Connection() {
  const { address } = useConnection()
  const { disconnect } = useDisconnect()

  return (
    <div>
      {address && <div>{address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}