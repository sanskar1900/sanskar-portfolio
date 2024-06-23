import React from "react";
import classes from "./fallingLink.module.scss";
import { useRouter } from "next/router";

interface linkProps {
  link: string;

  logo: string;
  label: string;
}
const FallingLink: React.FC<linkProps> = ({ link, logo, label }) => {
  const openLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${logo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onClick={openLink}
    ></div>
  );
};
export default FallingLink;
