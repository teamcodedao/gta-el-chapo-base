import Image from 'next/image';

import hero1 from './hero-1.png';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='container'>
        <header className='bg-white text-black flex gap-8 justify-center'>
          <div className='flex items-center shrink-0'>
            <img src='/man.png' alt='man' />
            <img src='/logo.png' alt='logo' />
          </div>
          <nav>
            <ul className='flex gap-10 text-3xl font-light h-full items-center flex-wrap'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>How to buy</a>
              </li>
              <li>
                <a href='#'>Tokenomics</a>
              </li>
            </ul>
          </nav>
          <div className='flex items-center shrink-0'>
            <button className='text-2xl btn-comic !px-10'>Buy Now</button>
          </div>
        </header>
        <div className='bg-primary'>
          <Image src={hero1} alt='hero-1' />
        </div>
      </div>
    </main>
  );
}
