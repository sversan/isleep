// src/App.tsx
import { Route, Link } from 'wouter';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <nav className="p-4 space-x-4">
        <Link href="/" className="text-blue-500">Dashboard</Link>
        {/* Add more links here */}
      </nav>
      <main className="p-4">
        <Route path="/" component={Dashboard} />
        {/* Add more routes here */}
      </main>
    </div>
  );
}

export default App;
