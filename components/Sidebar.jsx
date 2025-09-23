"use client"

import { useClerk, useUser } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';

import React, { use, useCallback, useEffect } from 'react'
import css from "@/styles/Sidebar.module.css";
import { useState } from 'react';
import { useSettingContext } from '@/context/setting/settings-context'; 
import Box from './Box';
import { sidebatRoutes } from '@/lib/sidebar';
import Link from 'next/link';
import { Typography } from "antd";
import Iconify from "./Iconify";
import cx from "classnames";
import SidebarContainer from './SidebarContainer';

const Sidebar = () => {

    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const {signOut} = useClerk();
    const router = useRouter();
    const {user} = useUser();

    useEffect(()=> {
        setMounted(true);
    }, []);

    const {
        setting : {isSidebarOpen},
        setSetting
    } = useSettingContext();

    const handleDrawerClose = useCallback(()=> {
        setSetting((prev)=>( {
            ...prev,
            isSidebarOpen: false
        }))
    }, [setSetting]);

    useEffect(()=> {
        if(isSidebarOpen) handleDrawerClose();
        console.log("tt",isSidebarOpen);

    }, [pathname, handleDrawerClose])


    const isActive = (route) => {
       if(route.route === pathname) return css.active;
    }

    const activeColor = (route) => {
        return isActive(route) && "var(--primary)";
    }

    // console.log("bb", mounted, isSidebarOpen);
    // console.log("user in sidebar", user);
    // console.log(sidebatRoutes(user));

  return (
   
 mounted && (
    <SidebarContainer 
    isDrawerOpen={isSidebarOpen}
    setIsDrawerOpen={handleDrawerClose} >

        <div className={css.wrapper}>
            <Box className={css.container}>
                {sidebatRoutes(user).map((route, index) => (
                    <Link 
                    href={route.route === "signout" ? "#" : route.route}
                    key= {index}
                    className={cx(css.item, isActive(route))}>

               <Typography style={{ color: activeColor(route) }}>
                  <Iconify icon={route.icon} width={"20px"} />
                </Typography>

                {/* name */}
                <Typography
                  className="typoSubtitle2"
                  style={{ color: activeColor(route) }}
                >  
                  {route.name}
                </Typography>

                    </Link>
                ))}

                  <Link
              href={""}
              className={cx(css.item)}
              onClick={() => {
                signOut(() => router.push("/sign-in"));
              }}
            >
              {/* icon */}
              <Typography>
                <Iconify icon={"solar:logout-2-bold"} width={"20px"} />
              </Typography>

              {/* name */}
              <Typography className="typoSubtitle2">Sign out</Typography>
            </Link>
            
            </Box>
        </div>

    </SidebarContainer>
 )

  )
}

export default Sidebar