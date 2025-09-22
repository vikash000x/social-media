// import { SettingContext } from '@/context/setting/settings-context'
import { SettingContextProvider } from '@/context/setting/settings-provider'
import ThemeProvider from '@/lib/ThemeProvider'
import React from 'react'

const homeLayout = ({children}) => {
  return (
     <SettingContextProvider>
        <ThemeProvider>
    <div>{children}</div>
    </ThemeProvider>
    </SettingContextProvider>
  )
}

export default homeLayout