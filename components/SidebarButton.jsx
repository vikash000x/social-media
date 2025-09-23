"use client"

import { useSettingContext } from '@/context/setting/settings-context'
import { Button, Typography } from 'antd';
import React from 'react'
import Iconify from "./Iconify";

const SidebarButton = () => {
 const {setSetting} = useSettingContext();


  return (
    <Button
    type="text"
    onClick={()=> {
         setSetting((prev) =>( {
            ...prev,
            iseSidebarOpen: !prev.iseSidebarOpen
         }));
    }}
    icon={
       <Typography>
          <Iconify icon="heroicons-solid:menu-alt-2" width="22px" />
        </Typography>
    }
    />
  )
}

export default SidebarButton