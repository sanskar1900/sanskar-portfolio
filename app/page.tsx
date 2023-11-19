'use client';
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Navbar from '@/public/components/navbar';
import RootLayout from './layout';
import Layout from '@/public/components/Layout';
import { themeReducer } from '@/src/themeReducer';
import { useGlobalContext } from './context/store';
import './globals.css';
import Introduction from '@/public/components/Introduction';
function Home() {
  const {theme, setTheme}= useGlobalContext();
  return (

<Layout>
    <Introduction name='Sanskar Bhadauriya' designation='UI Engineer | MERN Developer'/>
</Layout>

   
     
    
    
   
   
     
    
  );
}

export default Home;
