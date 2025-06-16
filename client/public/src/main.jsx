import './index.css';
import { QueryClient, QueryClientprovider } from '@tanstack/react-queryObjects';
const queryClient = newQueryClient();

ReactDOM.createRoot(...).render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);
