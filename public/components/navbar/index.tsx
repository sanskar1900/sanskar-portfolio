import React from 'react';
import Image from 'next/image';
import classes from './navbar.module.scss';
function Navbar() {
  const menuItem = [{name:"Home", route:'/'},{name :" Experience", route :'/experience'},{name:"Contact me", route:"/contact"}]
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
     <div>
      Theme
     </div>
    </div>
  );
}

export default Navbar;