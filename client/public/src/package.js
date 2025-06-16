import { Route, Link } from 'wouter';

function App() {
  return (
    <>
      <nav>
        <Link href="/">Dashboard</Link>
        <Link href="/heart">Heart Rate</Link>
      </nav>

      <Route path="/" component={Dashboard} />
      <Route path="/heart" component={HeartPage} />
      {/* Add more routes */}
    </>
  );
}
import { useRoutes } from 'wouter';

const routes = {
  "/": () => <Dashboard />,
  "/heart": () => <HeartPage />,
  // ...
};

function App() {
  const element = useRoutes(routes);
  return element || <NotFoundPage />;
}