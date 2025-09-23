"use client"

import { useSettingContext } from '@/context/setting/settings-context'
import React from 'react'

// export const metadata = () => {
//     return {
//         title: `social media | Home`,
//         description: "This is social media home page"
//     }
// }


const MainPage = () => {

    const { setting : {theme}, } = useSettingContext();
  //  console.log("theme in main page", theme);
  return (
    <div>HomePage: {theme}</div>
  )
}

export default MainPage