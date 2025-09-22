"use client"

import { useSettingContext } from '@/context/setting/settings-context'
import { Icon } from '@iconify/react';
import { Button } from 'antd';
import React from 'react'

const ModeButton = () => {
 
    const {
        setSetting
    } = useSettingContext();


  return (
        <Button style={{padding:0, border: "none"}}
        onClick={() => {
            setSetting((prev) => ({
                ...prev, theme: prev.theme==="light" ? "dark" : "light"
            }))
        }}  
          icon={<Icon icon="icon-park-solid:dark-mode" width={"35px"} />}
        />

       
  )
}

export default ModeButton