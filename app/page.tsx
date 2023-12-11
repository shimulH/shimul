import Image from 'next/image';
import Intro from '@/app/ui/intro';
import About from './ui/about';
import Contact from './ui/contact';

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-8 pt-24 px-4'>
      <div className='flex justify-center gap-6'>
        <Intro />
      </div>
      <About />
      <Contact />
    </main>
  );
}
