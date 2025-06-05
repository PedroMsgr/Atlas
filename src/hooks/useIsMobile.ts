// src/hooks/useIsMobile.ts
import { useState, useEffect } from 'react';

export default function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener('resize', check);
    check();
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
}
