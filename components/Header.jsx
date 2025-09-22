import React from 'react'
import css from "@/styles/Header.module.css"
import Image from 'next/image'
import { Flex } from 'antd'
import Box from './Box'
import ModeButton from './ModeButton'
import { UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
   <header className={css.wrapper}>
   <Box style={{height: "100%"}} >
    <div className={css.container}>
     <div className={css.sidebarButton}>
        {/* <SidebarButton /> */}
     </div>

     <Image src="/images/logo.png" alt="logo" width={150} height={40}
     className={css.logo} />

     <Flex gap={25 } align="center">
  <ModeButton />
  <UserButton afterSignOutUrl="/sign-in" />

     </Flex>


    </div>

   </Box>

   </header>
  )
}

export default Header