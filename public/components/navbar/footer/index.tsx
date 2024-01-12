import React from "react";
import Image from "next/image";
import classes from "./footer.module.scss";
import { useGlobalContext } from "@/app/context/store";
function Footer() {
  const { theme } = useGlobalContext();
  return (
    <div
      className={`${classes.footerRoot} ${
        theme !== "dark" ? classes.darkText : classes.lightText
      }`}
    >
      <div>Created by : sanskar1900 | Tech used : Next.js</div>
    </div>
  );
}

export default Footer;
