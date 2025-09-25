import React from "react";
import css from "@/styles/Header.module.css";
import Image from "next/image";
import { Flex, Tooltip, Typography } from "antd";
import Box from "./Box";
import ModeButton from "./ModeButton";
import { UserButton } from "@clerk/nextjs";
import SidebarButton from "./SidebarButton";
import Iconify from "./Iconify";
import Link from "next/link";

const Header = () => {
  return (
    <header className={css.wrapper}>
      <Box style={{ height: "100%" }}>
        <div className={css.container}>
          {/* Sidebar Button */}
          <div className={css.sidebarButton}>
            <SidebarButton />
          </div>

          {/* Logo */}
          <Link href="/" className={css.logoLink}>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={150}
              height={40}
              className={css.logo}
            />
          </Link>

          {/* Right Section */}
          <Flex gap={25} align="center">
            {/* Social Links */}
            <Flex gap={15} align="center">
              <Tooltip title="GitHub">
                <Link
                  href="https://github.com/vikash000x"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Iconify
                    icon="mdi:github"
                   width={"35px"}
                    color="grey"
                  />
                </Link>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <Link
                  href="https://www.linkedin.com/in/vikash-sinha-215000259/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Iconify
                    icon="mdi:linkedin"
                   width={"35px"}
                    color="#0A66C2"
                  />
                </Link>
              </Tooltip>
            </Flex>

            {/* Dark/Light Mode */}
            <ModeButton />

            {/* User Profile */}
            <UserButton afterSignOutUrl="/sign-in" />
          </Flex>
        </div>
      </Box>
    </header>
  );
};

export default Header;
