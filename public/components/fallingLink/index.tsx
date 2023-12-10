import React from "react";
import classes from "./fallingLink.module.scss";
import { useRouter } from "next/router";

interface linkProps {
  link: string;
  positionx: number;
  logo: string;
  label: string;
}
const FallingLink: React.FC<linkProps> = ({ link, positionx, logo, label }) => {
  const openLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={classes.root}
      style={{
        left: `${positionx}%`,
        backgroundImage: `url(${logo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onClick={openLink}
    >
      <div style={{ position: "relative" }}>
        <div
          className={classes.label}
          style={{
            position: "absolute",
            bottom: "-130px",
            left: "15px",
            textAlign: "center",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};
export default FallingLink;
