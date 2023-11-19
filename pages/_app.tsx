import type { AppProps } from 'next/app'
import '../app/globals.css';
import { useGlobalContext } from '@/app/context/store';
import { useEffect } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  
  return (
   
         <Component {...pageProps} />
   
  
  );
}