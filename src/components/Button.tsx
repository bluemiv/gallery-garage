import { TPropsWithComponent } from '../types';

interface TProps {
  onClick?: () => void;
}

export default function Button({ className, children, onClick }: TPropsWithComponent<TProps>) {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
