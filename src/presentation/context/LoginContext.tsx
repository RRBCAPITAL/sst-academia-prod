"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type LoginContextType = {
  openLogin: boolean;
  setOpenLogin: (open: boolean) => void;
};

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ openLogin, setOpenLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin debe usarse dentro de LoginProvider");
  return context;
};
