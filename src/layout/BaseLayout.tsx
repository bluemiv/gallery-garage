import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';

export default function BaseLayout() {
  return (
    <div className="w-full h-full min-h-screen">
      <Header />
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
