"use client"

import { createContext, useContext } from "react";

export const SettingContext = createContext({});

export const useSettingContext = () => {
//   console.log("useSettingContext");
    const context = useContext(SettingContext);
  // console.log("context in useSettingContext", context);
    if(!context) 
        throw new Error("useSettingContext must be used within a themeprovider");

  return context;
}

