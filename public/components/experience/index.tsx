import classes from "./experience.module.scss";
type props = {
  experience: any[];
};
const Experiece = ({ experience }: props) => {
  return (
    <div>
      {experience?.map((experience: any) => {
        return (
          <div>
            <div className={classes.nameLogo}>
              <span className={classes.name}>{experience.companyName}</span>
              <img width={100} height={40} alt="logo" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Experiece;
