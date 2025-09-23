// import { SettingContext } from '@/context/setting/settings-context'
import Box from '@/components/Box'
import { SettingContextProvider } from '@/context/setting/settings-provider'
import ThemeProvider from '@/lib/ThemeProvider'
import React from 'react'
import css from "@/styles/homeLayout.module.css";
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const homeLayout = ({children}) => {
  return (
     <SettingContextProvider>
        <ThemeProvider>
            <Box type="baseBg" style={{position: "relative", width: "100vw", height: "100vh"}}  >
    <div className={css.wrapper} >
        <Header/>
        
        <div className={css.container}>
                <Sidebar />

                <div className={css.page_body}>{children}</div>
              </div>
        
        </div>
    </Box>
    </ThemeProvider>
    </SettingContextProvider>
  )
}

export default homeLayout