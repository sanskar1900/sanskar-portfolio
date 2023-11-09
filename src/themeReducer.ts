const CHANGE_THEME_TO_DARK = "CHANGE_THEME_TO_DARK";
const CHANGE_THEME_TO_LIGHT = "CHANGE_THEME_TO_LIGHT";

interface themeDataType {
    theme: string;

}
const initialState : themeDataType={
 theme:"light"
}
export const themeReducer = (state : themeDataType = initialState, action: any) => {
    switch (action.type) {
      case CHANGE_THEME_TO_DARK:
        return {
          ...state,
          theme: 'dark',
        };
      case CHANGE_THEME_TO_LIGHT:
        return{
            ...state,
           theme : 'light'
        }
      default:
        return state;
    }
  };
  