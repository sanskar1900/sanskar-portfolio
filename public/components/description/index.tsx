import React, { useEffect, useRef, useState } from "react";
import classes from "./description.module.scss";
import Experiece from "../experience";
type props = {
  sections: any[];
};
const Description = ({ sections }: props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedHeading = sections[selectedIndex].heading;
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting); // When sentinel is out of view, navbar is stuck
      },
      { root: null, threshold: 0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, []);

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
      <div ref={sentinelRef} style={{ height: 1 }} />
      <div
        className={`${classes.navbar} ${isSticky ? classes.stickyShadow : ""}`}
      >
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
