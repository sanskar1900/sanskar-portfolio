import { dialogClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./introduction.module.scss";
import { useGlobalContext } from "@/app/context/store";
import FallingLink from "../fallingLink";
interface Introductionprops {
  name: string;
  designation: string;
  profileLinks: any;
}

const Introduction: React.FC<Introductionprops> = ({
  name,
  designation,
  profileLinks,
}) => {
  const [displayedDesignation, setDisplayedDesignation] = useState("");
  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= designation.length) {
        setDisplayedDesignation(designation.slice(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, []);

  const { theme } = useGlobalContext();
  return (
    <div
      className={`${classes.root} ${
        theme !== "dark" ? classes.darkText : classes.lightText
      }`}
    >
      <div className={classes.name}>👋, {`I am ${name}`}</div>
      <div className={classes.designation}>{displayedDesignation}</div>

      {profileLinks.map((data: any) => {
        return (
          <FallingLink
            link={data?.link}
            positionx={data?.left}
            logo={data?.imgUrl}
            label={data?.label}
          />
        );
      })}
    </div>
  );
};
export default Introduction;
