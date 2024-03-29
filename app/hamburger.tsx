'use client';

import {useEffect, useState} from 'react';
import {Squash as SquashHamburger} from 'hamburger-react';

import Nav from './nav';
import {useHash} from '@/lib/use-hash';

export default function Hamburger() {
  const [isOpen, setOpen] = useState(false);

  const hash = useHash();

  useEffect(() => {
    setOpen(false);
  }, [hash]);

  return (
    <>
      <SquashHamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className='fixed inset-0 w-screen h-screen bg-white z-[999]'>
          <Nav inHamburger />
          <button
            className='absolute top-1 text-xl right-2 border border-black p-1'
            onClick={() => setOpen(false)}
          >
            close
          </button>
        </div>
      )}
    </>
  );
}
