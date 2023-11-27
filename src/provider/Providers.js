import { ThemeProvider } from "./themeProvider"



const Providers = ({children}) => {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}

export default Providers