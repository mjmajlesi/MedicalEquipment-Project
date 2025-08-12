"use client";
import {AppContext} from "@/Context/AppContext";
import React, { useEffect, useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {

  const [Login , SetLogin] = useState<string>("")
  const [isLogin , SetIsLogin] = useState<boolean>(false)

  
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUsername = localStorage.getItem("username");
    if (savedToken && savedUsername) {
      SetIsLogin(true);
      SetLogin(savedUsername);
    }
  }, []);
  

  return (
  <AppContext.Provider value={{Login, SetLogin, isLogin, SetIsLogin}}>
    {children}
  </AppContext.Provider>
  )
}

export default Layout;
