import { Outlet } from 'react-router-dom';

export default function BaseLayout() {
  return (
    <div>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
