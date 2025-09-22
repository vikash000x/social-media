"use client"

import { useState } from "react"
import { SettingContext } from "./settings-context"

export function SettingContextProvider({children}){
// console.log("SettingContextProviderbla");
    const [setting, setSetting] = useState({
        theme: "light",
        isSidebarOpen: true
    })
    // console.log("hey");


    return(
        <SettingContext.Provider value={{setting, setSetting}}>   
             {children}
         </SettingContext.Provider>
    )
}