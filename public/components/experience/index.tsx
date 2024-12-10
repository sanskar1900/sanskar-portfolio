import { url } from "inspector";
import classes from "./experience.module.scss";
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
              <a className={classes.name}>{experience.companyName}</a>
              <img
                src={experience.companyLogo}
                width={100}
                height={40}
                alt="logo"
              />
            </div>
            <div>
              {experience?.about.map((desc: string) => {
                return <p className={classes.desc}>{`> ${desc}`}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Experiece;
