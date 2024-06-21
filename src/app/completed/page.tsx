import Link from 'next/link';

export default function Page() {
  return (
    <div className="max-w-screen-md mx-auto mt-10 grid gap-10 font-bold text-large text-center">
      <h1>登録完了！！</h1>
      <div className="mt-10">
        <Link href="/">登録画面に戻る</Link>
      </div>
    </div>
  );
}
