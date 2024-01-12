import React from "react";
import classes from "./profile.module.scss";
import Image from "next/image";
interface profilDataType {
  data: any;
}
const Profile = ({ data }: profilDataType) => {
  const listItems = [
    { link: " sanskarbhadauriya567@gmail.com", id: 1 },
    { link: "+917983069494", id: 2 },
    { link: "LinkedIn", id: 3 },
    { link: "GitHub", id: 3 },
    { link: "LeetCode", id: 3 },
    { link: "CodeChef", id: 3 },
    { link: "Download Resume", id: 3 },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.center}>
        <div className={classes.img}>
          <Image
            src={require("../sanskar.jpeg")}
            alt="profile"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className={classes.center}>
        <div className={classes.name}>{data?.name}</div>
      </div>
      <div className={classes.center}>
        <div className={classes.designation}>{data?.designation}</div>
      </div>
      <div className={classes.center}>
        <div className={classes.designationLocation}>
          {"📍 Bangalore, India"}
        </div>
      </div>
      <div className={classes.list}>
        {listItems.map((data: any, index: number) => {
          return (
            <div className={classes.center}>
              <div
                key={data?.id}
                style={index !== 0 ? { marginTop: "20px" } : {}}
                className={classes.listItem}
              >{`${data?.link}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Profile;
