'use client';
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Navbar from '@/public/components/navbar';
import RootLayout from './layout';
import Layout from '@/public/components/Layout';
import { themeReducer } from '@/src/themeReducer';
import { useGlobalContext } from './context/store';
import './globals.css';
function Home() {
  const {theme, setTheme}= useGlobalContext();
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);
  return (

<Layout><h1>Hiee! {theme}</h1></Layout>

   
     
    
    
   
   
     
    
  );
}

export default Home;
