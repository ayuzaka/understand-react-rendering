import { ReactLocation, Router, Link, Outlet } from '@tanstack/react-location';
import { Primitive } from './Primitive';
import { Object } from './Object';
import { Callback } from './Callback';

function App() {
  const location = new ReactLocation();

  return (
    <Router
      location={location}
      routes={[
        { path: '/', element: <Primitive /> },
        { path: '/object', element: <Object /> },
        { path: '/callback', element: <Callback /> },
      ]}
    >
      <div>
        <Link to="/">Home</Link> | <Link to="/object">Object</Link> | <Link to="/callback">Callback</Link>
      </div>
      <hr />
      <Outlet />
    </Router>
  );
}

export default App;
