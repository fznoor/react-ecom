import ReactDOM from 'react-dom/client'
import App from './App'

import { CartContextProvider } from './components/Cart/context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <QueryClientProvider client={queryClient}>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </QueryClientProvider>
)