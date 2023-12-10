"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import classes from "./navbar.module.scss";
import { useGlobalContext } from "@/app/context/store";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
function Navbar() {
  const menuItem = [
    { name: "Home", route: "/" },
    { name: " Experience", route: "/experience" },
    { name: "Contact me", route: "/contact" },
  ];
  const { theme, setTheme } = useGlobalContext();
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const route = useRouter();
  return (
    <div className={classes.root}>
      <div>
        <ul className={classes.flexRow20}>
          {menuItem.map((data: any) => {
            return (
              <li
                onClick={() => route.push(data?.route)}
                className={classes.listItem}
              >
                {data.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.theme} onClick={changeTheme}>
        {theme === "light" ? <NightlightRoundIcon /> : <LightModeIcon />}
      </div>
    </div>
  );
}

export default Navbar;
