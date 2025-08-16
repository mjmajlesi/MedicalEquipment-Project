import { createContext } from "react";

interface IContext {
  Login : string
  SetLogin : React.Dispatch<React.SetStateAction<string>>
  isLogin : boolean
  SetIsLogin : React.Dispatch<React.SetStateAction<boolean>>
  SetEmails : React.Dispatch<React.SetStateAction<string>>
  Emails : string
}

export const AppContext = createContext({} as IContext)