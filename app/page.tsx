import Image from 'next/image';

import hero1 from './hero-1.png';
import hero2 from './hero-2.png';

export default function Home() {
  return (
    <main className='min-h-screen'>
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
      <div className='bg-primary flex justify-center pb-5'>
        <Image src={hero1} quality={100} alt='hero-1' />
      </div>
      <div className='flex justify-center bg-[url(/hero-2-mini.png)] bg-no-repeat bg-cover bg-right-top'>
        <div className='relative w-fit'>
          <Image src={hero2} quality={100} alt='hero-1' />
          <div className='absolute inset-0 bg-hero'></div>
          <div className='absolute inset-0'>
            <div className='flex flex-col justify-center absolute right-36 max-w-md h-full'>
              <h3 className='text-7xl font-extrabold font-pricedown text-right'>
                About
              </h3>
              <div className='mt-24 uppercase text-2xl text-right'>
                Chapo coin Hot Ladys on Bas. $GTACHAPO is an aesthetic, a
                lifestyle and a community. You like the art, we paint it blue!
                MA 15+ Action Violence, Coarse Language, Drug References, Drug
                Use, Mature Themes, Nudity, Sex Scenes, Sexual References,
                Violence.
              </div>
              <div className='mt-16 flex justify-end'>
                <div className='bg-white rounded-full flex gap-16 px-14 py-4'>
                  <a href='#'>
                    <img src='/twitter.png' alt='x' className='h-16' />
                  </a>
                  <a>
                    <img src='/telegram.png' alt='tele' className='h-16' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
