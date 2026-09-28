// Now no need to cluter the provider the connect all here 
//There were two things -> the provider and the connection logic/code 
//provider is in main.jsx and the connection logic is in Navbar

import Navbar from './components/navbar';

export default function App() {
  return (
    <>
      <Navbar />          {/* always at the top */}
      <main>{/* rest of your app */}</main>
    </>
  )
}