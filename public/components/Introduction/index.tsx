import { dialogClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./introduction.module.scss";
import { useGlobalContext } from "@/app/context/store";
import FallingLink from "../fallingLink";
import Profile from "../profile";
interface Introductionprops {
  name: string;
  designation: string;
  profileLinks: any;
  profilePicture: string;
}

const Introduction: React.FC<Introductionprops> = ({
  name,
  designation,
  profileLinks,
  profilePicture,
}) => {
  const [displayedDesignation, setDisplayedDesignation] = useState("");
  const profileData = {
    profilePicture: profilePicture,
    name: name,
    designation: designation,
  };
  const { theme } = useGlobalContext();
  return (
    <div
      className={`${classes.root} ${
        theme !== "dark" ? classes.darkText : classes.lightText
      }`}
    >
      <div className={classes.aboutMe}>
        <div className={classes.profile}>
          <Profile data={profileData} />
        </div>
        <div className={classes.desc}></div>
      </div>

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
