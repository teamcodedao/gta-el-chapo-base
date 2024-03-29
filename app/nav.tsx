'use client';

import {useHash} from '@/lib/use-hash';

export default function Nav() {
  const hash = useHash();

  return (
    <nav>
      <ul
        suppressHydrationWarning
        className='flex gap-x-2 sm:gap-x-5 lg:gap-x-10 text-lg sm:text-lx md:text-2xl lg:text-3xl font-light h-full items-center flex-wrap transition [&_li_a[aria-current=true]]:text-primary'
      >
        <li>
          <a href='#home' aria-current={!hash || hash === '#home'}>
            Home
          </a>
        </li>
        <li>
          <a href='#about' aria-current={hash === '#about'}>
            About
          </a>
        </li>
        <li>
          <a href='#how-to-buy' aria-current={hash === '#how-to-buy'}>
            How to buy
          </a>
        </li>
        <li>
          <a href='#tokenomics' aria-current={hash === '#tokenomics'}>
            Tokenomics
          </a>
        </li>
      </ul>
    </nav>
  );
}
