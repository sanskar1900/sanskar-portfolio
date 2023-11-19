import React from "react";
import classes from "./fallingLink.module.scss";

interface linkProps{
    link: string;
    positionx :  number;

}
const FallingLink: React.FC<linkProps> = ({link, positionx})=>{
    return(
        <div className={classes.root} style={{left:'25%'}}>
        </div>
    )
}
export default FallingLink;