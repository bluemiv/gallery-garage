import Button from '@components/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../router/router.tsx';

export default function RootPage() {
  const nav = useNavigate();
  return (
    <main>
      <section className="p-10 w-full min-h-[400px] flex flex-col justify-center items-center">
        <div className="mx-auto w-full max-w-[1280px] flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-indigo-600">Gallery Garage</h1>
          <p className="text-lg md:text-2xl leading-relaxed mb-10">
            자동차를 좋아하는 사람들을 위해, 다양한 자동차 이미지를 볼 수 있는 갤러리입니다. 생동감
            있는 이미지를 재밌게 찾아보세요.
          </p>
          <Button onClick={() => nav(ROUTE_PATH.GALLERY)}>갤러리로 이동</Button>
        </div>
      </section>
    </main>
  );
}
