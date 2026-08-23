"use client";
import { AppContext } from "@/Context/AppContext";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { refreshAccessToken } from "@/lib/api";

function Layout({ children }: { children: React.ReactNode }) {
  const [Login, SetLogin] = useState<string>("");
  const [isLogin, SetIsLogin] = useState<boolean>(false);
  const [Emails, SetEmails] = useState<string>("");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("Email");

    if (savedToken && savedUsername && savedEmail) {
      SetIsLogin(true);
      SetLogin(savedUsername);
      SetEmails(savedEmail);

      // Renew the short-lived access token so the session stays valid.
      refreshAccessToken();
    }
  }, []);

  return (
  <ThemeProvider attribute="data-theme" defaultTheme="light">
      <AppContext.Provider
        value={{ Login, SetLogin, isLogin, SetIsLogin, Emails, SetEmails }}
      >
        {children}
      </AppContext.Provider>
  </ThemeProvider>
  );
}

export default Layout;
