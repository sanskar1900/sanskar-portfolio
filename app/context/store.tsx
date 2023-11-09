'use client';
import { createContext, useContext,Dispatch, SetStateAction, useState, ReactNode } from "react";
interface themeDataType{
    theme : string;
    setTheme: Dispatch<SetStateAction<string>>;
}
const ThemeContext = createContext<themeDataType>(
    {
        theme:"dark",
       setTheme:()=>{}   
    }
)
export const GlobalThemeProvider = ({children}:{children: ReactNode})=>{
    const [theme, setTheme] = useState('light');
    return(
       <ThemeContext.Provider value={{theme , setTheme}}>
  {children}
       </ThemeContext.Provider>
    ) 
}

export const useGlobalContext = ()=>useContext(ThemeContext);