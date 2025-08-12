import { createContext } from "react";

interface IContext {
  Login : string
  SetLogin : React.Dispatch<React.SetStateAction<string>>
  isLogin : boolean
  SetIsLogin : React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext({} as IContext)