'use client';

import UncapitalizeForm from './components/UncapitalizeForm';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-2xl">
        <h1 className="text-2xl font-bold">uncapy locks capital</h1>
        <UncapitalizeForm />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a href="https://github.com/jarrensj/uncapy-locks-capital" className="text-blue-500 hover:underline">github</a>
      </footer>
    </div>
  );
}
