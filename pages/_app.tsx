import type { AppProps } from 'next/app'
import '../app/globals.css';
import { useGlobalContext } from '@/app/context/store';
import { useEffect } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  const {theme, setTheme}= useGlobalContext();
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);
  return (
   
         <Component {...pageProps} />
   
  
  );
}