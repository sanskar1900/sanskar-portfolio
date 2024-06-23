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
  return <div>{children}</div>;
};

export default Layout;
