import { url } from "inspector";
import classes from "./experience.module.scss";
import exp from "constants";
type props = {
  experience: any[];
};
const Experiece = ({ experience }: props) => {
  return (
    <div className={classes.section}>
      {experience?.map((experience: any) => {
        return (
          <div>
            <div className={classes.nameLogo}>
              <a className={classes.name}>
                {experience.companyName + ` (${experience.designation})`}
              </a>
              <img
                className={classes.company}
                src={experience.companyLogo}
                width={experience.width}
                height={experience.height}
                alt="logo"
              />
            </div>
            <div>
              {experience?.about.map((desc: string) => {
                return <p className={classes.desc}>{`👉 ${desc}`}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Experiece;
