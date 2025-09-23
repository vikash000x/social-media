"use client"

const { Drawer } = require("antd");
import useWindowsDimension from "@/hooks/useWindowsDimension";
import css from "@/styles/Sidebar.module.css";

const SidebarContainer=({
    isDrawerOpen,
    setIsDrawerOpen,
    children,
    ...other
})  => {
    const width = useWindowsDimension();
    // console.log("width", width);
    // console.log("isDrawerOpen", isDrawerOpen);  
    // console.log("other in sidebar container", other);
    // console.log("children in sidebar container", children);
    // console.log("setIsDrawerOpen in sidebar container", setIsDrawerOpen);

    if(width <= 1268){
        return (
            <Drawer
            {...other}
            placement={"left"}
            onClose={() => setIsDrawerOpen(false)}
            height={"100%"}>
                <div className={css.drawerContainer}>
                    {children}
                </div>
            </Drawer>
        )
    }

    return children;
}

export default SidebarContainer;