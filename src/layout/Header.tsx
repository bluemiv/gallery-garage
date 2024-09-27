import { ROUTE_PATH } from '../router/router.tsx';
import Icons from '@components/Icons';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const nav = useNavigate();

  return (
    <header className="h-[60px] flex items-center justify-between px-10">
      <button className="font-semibold" onClick={() => nav(ROUTE_PATH.ROOT)}>
        Gallery Garage
      </button>
      <nav>
        <ul className="flex items-center gap-3">
          {[
            { icon: <Icons.Home />, label: 'Home', link: ROUTE_PATH.ROOT },
            { icon: <Icons.Images />, label: 'Gallery', link: ROUTE_PATH.GALLERY },
          ].map(({ icon, label, link }) => (
            <li key={label} className="flex-1">
              <button
                className="bg-slate-100 hover:bg-slate-200 active:bg-slate-300 p-3 sm:px-4 sm:py-2 rounded-md flex gap-2 items-center"
                onClick={() => nav(link)}
              >
                {icon}
                <span className="hidden sm:block">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
