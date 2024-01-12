"use client";
import React, { ReactNode, useEffect } from "react";
import Navbar from "../navbar";
import Footer from "../navbar/footer";
import classes from "./layout.module.scss";
import { useGlobalContext } from "@/app/context/store";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, setTheme } = useGlobalContext();
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove(classes.lightTheme);
      document.body.classList.add(classes.darkTheme);
    } else {
      document.body.classList.remove(classes.darkTheme);
      document.body.classList.add(classes.lightTheme);
    }
  }, [theme]);
  return <div>{children}</div>;
};

export default Layout;
