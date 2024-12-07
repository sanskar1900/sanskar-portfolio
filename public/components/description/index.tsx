import React, { useState } from "react";
import classes from "./description.module.scss";
import Experiece from "../experience";
type props = {
  sections: any[];
};
const Description = ({ sections }: props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedHeading = sections[selectedIndex].heading;
  const handleChangeHeading = (index: number) => {
    if (index === selectedIndex) return;
    setSelectedIndex(index);
  };
  const renderContent = () => {
    switch (selectedHeading) {
      case "Experience":
        return <Experiece experience={sections?.[selectedIndex]?.values} />;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.navbar}>
        {sections?.map((section: any, index: number) => {
          const isSelected = index === selectedIndex;
          return (
            <button
              onClick={() => handleChangeHeading(index)}
              className={
                isSelected
                  ? classes.selectedHeadingButton
                  : classes.headingButton
              }
            >
              {section.heading}
            </button>
          );
        })}
      </div>
      <div className={classes.contentSection}>{renderContent()}</div>
    </div>
  );
};
export default Description;
