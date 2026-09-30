# The above example is straight from the docs of Wagmi
But you can edit them like 
config ko src se bahar kar do 

connect button ko in a component 

the button in the navbar and then the navbar straigh up in the main.jsx 

All these kinda

And in the next commit we will see how we can add a local chain using viem that will point towards anvil node.

# Now we will make a file using viem which will have the details of our local chain 
the docs are here `https://viem.sh/docs/chains/introduction` 

# Ok now time for some conepts and making this production ready 
Till now what you have seen is just copy paste from wagmi docs ...but how are we gonna make it when we are working on a production level application. 

The whole concepts revolve arround 2 providers - `WagmiProvider` (wagmi) and `QueryClientProvider` (Tanstack query)

We have to wrap our entier application with these twos........And from where do we wrap ? 

From main.tsx just to make App.tsx more cleaner And then create a navbar 

## How ever these are not the standard ways to do it...
The best stack for wallet connection in ethereum is rainbowkit + wagmi + viem + tanstackquery they can cover almost all accepts of frontend
And for the app you just have to go to rainbowkit and install the prebuild next rainbowkit
