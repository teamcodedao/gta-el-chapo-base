'use client';

import {useState, useEffect} from 'react';

export function useHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash;
}
