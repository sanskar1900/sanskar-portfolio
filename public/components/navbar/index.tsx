import React, { useState } from 'react';
import Image from 'next/image';
import classes from './navbar.module.scss';
import { useGlobalContext } from '@/app/context/store';
function Navbar() {
  const menuItem = [{name:"Home", route:'/'},{name :" Experience", route :'/experience'},{name:"Contact me", route:"/contact"}]
  const { theme, setTheme } = useGlobalContext();
  const changeTheme = ()=>{
    if(theme==="light"){
    setTheme("dark")}
    else
    {
      setTheme("light");
    }
  }
  return (
    <div className={classes.root}>
      <div >
     <ul className={classes.flexRow20}>
      {menuItem.map((data: any)=>{
        return(
          <li className={classes.listItem}>
            {data.name}
          </li>
        )
      })}
     </ul>
     </div>
     <div onClick={changeTheme}>
      {theme}
     </div>
    </div>
  );
}

export default Navbar;