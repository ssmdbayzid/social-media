
import { useState, useEffect } from "react"
import { ThemeContext } from "../context/themeContext";

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false);
    useEffect(()=>{
        let storedTheme = localStorage.getItem("theme");
        if(!storedTheme || !storedTheme === "dark" || storedTheme === "light"){
            storedTheme =  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark"
            : "light";            
        }
        setTheme(storedTheme)
    },[])
    useEffect(()=>{
        document.querySelector("html").setAttribute("data-theme", theme)
        // const htmlElement = document.querySelector('html');
        // htmlElement.classList.toggle(theme);
    },[theme])

    useEffect(()=>{
        const onChange = (e)=>{
            const colorScheme = e.matches ? "dark" : "light";
            setTheme(colorScheme)
        }
        window.matchMedia("(prefers-color-schema: dark)")
        .addEventListener("change", onChange)

        return () =>{
            window
            .matchMedia("(prefers-color-scheme: dark)")
            .removeEventListener("change", onChange)
        }
    },[])

    const themeToggle = () => {
        setTheme((preTheme)=>{
            const currentTheme = preTheme === "dark"? "light" : "dark"
            localStorage.setItem("theme", currentTheme)
            return currentTheme;
        })
    }
    return (<ThemeContext.Provider value={{theme, themeToggle}}>
        {children}
    </ThemeContext.Provider>)
}