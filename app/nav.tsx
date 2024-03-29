'use client';

import clsx from 'clsx';

import {useHash} from '@/lib/use-hash';

interface NavProps {
  inHamburger?: boolean;
}

export default function Nav({inHamburger}: NavProps) {
  const hash = useHash();

  return (
    <ul
      suppressHydrationWarning
      className={clsx(
        'flex gap-x-2 sm:gap-x-5 lg:gap-x-10 text-lg sm:text-lx md:text-2xl lg:text-3xl font-light items-center flex-wrap transition [&_li_a[aria-current=true]]:text-primary',
        {
          'flex-col text-4xl gap-10 pt-10': inHamburger,
        }
      )}
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
  );
}
