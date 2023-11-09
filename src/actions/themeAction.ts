const CHANGE_THEME_TO_DARK = "CHANGE_THEME_TO_DARK";
const CHANGE_THEME_TO_LIGHT = "CHANGE_THEME_TO_LIGHT";

export const changeTheme = (theme : any) => {
    if (theme === 'light') {
      return {
        type: CHANGE_THEME_TO_LIGHT,
      };
    } else if (theme === 'dark') {
      return {
        type: CHANGE_THEME_TO_DARK,
      };
    }
  };