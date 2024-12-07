import React, { useState } from "react";
import classes from "./introduction.module.scss";
import { useGlobalContext } from "@/app/context/store";
import Description from "../description";
import Profile from "../profile";
interface Introductionprops {
  name: string;
  designation: string;
  profileLinks: any;
  profilePicture: string;
  sections: any[];
}

const Introduction: React.FC<Introductionprops> = ({
  name,
  designation,
  profileLinks,
  profilePicture,
  sections,
}) => {
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
          <Profile data={profileData} profileLinks={profileLinks} />
        </div>
        <div className={classes.desc}>
          <Description sections={sections} />
        </div>
      </div>
    </div>
  );
};
export default Introduction;
