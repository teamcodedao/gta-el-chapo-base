import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import hero1 from './hero-1.png';
import hero2 from './hero-2.png';
import hero3 from './hero-3.png';
import man1 from './man-1.png';
import man2 from './man-2.png';
import man3 from './man-3.png';
import man4 from './man-4.png';
import man5 from './man-5.png';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <header className='bg-white text-black flex gap-4 sm:gap-8 justify-center overflow-hidden px-10 sm:px-2 lg:px-0'>
        <div className='flex items-center shrink-0'>
          <img src='/man.png' alt='man' className='hidden lg:block' />
          <img src='/logo.png' alt='logo' />
        </div>
        <nav>
          <ul className='flex gap-x-2 sm:gap-x-5 lg:gap-x-10 text-lg sm:text-lx md:text-2xl lg:text-3xl font-light h-full items-center flex-wrap'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#how-to-buy'>How to buy</a>
            </li>
            <li>
              <a href='#tokenomics'>Tokenomics</a>
            </li>
          </ul>
        </nav>
        <div className='flex items-center shrink-0'>
          <button className='sm:text-lg md:text-xl lg:text-2xl btn-comic !px-10'>
            Buy Now
          </button>
        </div>
      </header>
      <div id='home' className='bg-primary flex justify-center pb-5'>
        <Image src={hero1} quality={100} alt='hero-1' />
      </div>
      <div
        id='about'
        className='flex justify-center bg-[url(/hero-2-mini.png)] bg-no-repeat bg-cover bg-right-top'
      >
        <div className='relative w-fit'>
          <Image src={hero2} quality={100} alt='hero-2' />
          <div className='absolute inset-0 bg-hero'></div>
          <div className='absolute inset-0'>
            <div className='flex flex-col justify-center absolute right-10 lg:right-36 lg:max-w-lg h-full'>
              <h2 className='text-5xl sm:text-6xl lg:text-8xl font-extrabold font-pricedown text-right'>
                About
              </h2>
              <div className='mt-5 sm:mt-10 lg:mt-24 uppercase text-xl sm:text-2xl lg:text-3xl text-right'>
                MA 15+ Action Violence, Coarse Language, Drug References, Drug
                Use, Mature Themes, Nudity, Sex Scenes, Sexual References,
                Violence.
              </div>
              <div className='mt-5 sm:mt-12 lg:mt-16 flex justify-end'>
                <div className='bg-white rounded-full flex gap-5 sm:gap-10 lg:gap-16 p-2 sm:p-5 lg:px-14 lg:py-4'>
                  <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_x'>
                    <img src='/x.svg' alt='x' className='h-10 lg:h-16' />
                  </a>
                  <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_tele'>
                    <img src='/tele.svg' alt='tele' className='h-10 lg:h-16' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary text-white py-8 lg:py-11'>
        <Marquee autoFill>
          <span className='text-3xl lg:text-5xl inline-block px-14'>
            $DROGA
          </span>
        </Marquee>
      </div>
      <div className='bg-[#1A1A1A]'>
        <div className='max-w-full w-[1440px] mx-auto grid grid-cols-3 gap-4 lg:gap-8 px-4 sm:px-8 lg:px-0 py-4 sm:py-8 [&_img]:object-cover'>
          <div>
            <Image src={man1} quality={100} alt='man-1' />
          </div>
          <div>
            <Image src={man2} quality={100} alt='man-2' />
          </div>
          <div>
            <Image src={man3} quality={100} alt='man-3' />
          </div>
          <div>
            <Image
              src={man4}
              quality={100}
              alt='man-4'
              style={{
                height: '100%',
              }}
            />
          </div>
          <div className='col-span-2'>
            <Image src={man5} quality={100} alt='man-5' />
          </div>
        </div>
      </div>
      <div
        id='tokenomics'
        className='h-[810px] bg-primary bg-[url(/money-bg.gif)] bg-cover flex flex-col items-center justify-center gap-16'
      >
        <h2 className='font-pricedown drop-shadow-[0px_2px_2px_rgba(0,0,0,0.75)] text-6xl lg:text-8xl'>
          Tokenomics
        </h2>
        <h4 className='text3xl lg:text-4xl'>Total supply:</h4>
        <h4 className='text-5xl lg:text-7xl -mt-12'>420,690,000</h4>
      </div>
      <div
        id='how-to-buy'
        className='flex justify-center bg-[url(/hero-3-mini.png)] bg-no-repeat bg-cover bg-right-bottom'
      >
        <div className='relative w-fit'>
          <Image src={hero3} quality={100} alt='hero-3' />
          <div className='absolute inset-0 bg-hero'></div>
          <div className='absolute inset-0'>
            <div className='flex flex-col pt-10 md:pt-20 lg:pt-32 w-full lg:w-auto lg:absolute right-36 lg:max-w-lg h-full gap-16'>
              <div className='flex justify-center'>
                <button className='text-primary bg-white rounded-full p-5 lg:px-16 lg:py-10 text-2xl lg:text-6xl inline-block cursor-default'>
                  CA: TBA
                </button>
              </div>
              <h3 className='text-3xl lg:text-6xl text-center whitespace-nowrap'>
                Follow EL-Chapo
              </h3>
              <div className='flex justify-center'>
                <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_x'>
                  <img src='/x.svg' alt='x' className='h-16 sm:h-32 lg:h-48' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-primary text-center px-2 py-12 font-pricedown text-3xl lg:text-4xl'>
        2024 © all rights reserved
      </footer>
    </main>
  );
}
