import { dialogClasses } from "@mui/material";
import React, { useEffect , useState} from "react";
import classes from "./introduction.module.scss";
import { useGlobalContext } from '@/app/context/store';
import FallingLink from "../fallingLink";
interface Introductionprops {
    name: string;
    designation: string;

}

const Introduction : React.FC<Introductionprops> = ({name,designation})=>{
    const [displayedDesignation, setDisplayedDesignation] = useState('');
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
    
    const {theme}= useGlobalContext();
return(

    <div className={`${classes.root} ${theme!=="dark"? classes.darkText : classes.lightText}`}>
        <h1>👋, {`I am ${name}`}</h1>
        <h3>{displayedDesignation}</h3>
        <FallingLink link="l" positionx={7}/>
        

    </div>
)
}
export default Introduction;