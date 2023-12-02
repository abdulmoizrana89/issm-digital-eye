import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "../../../layout";
import useStore from "../../../store";

function Layout() {
  const isCollapsed = useStore((state: any) => state.isCollapsed);

  return (
    <Grid
      templateColumns={isCollapsed ? "0.60fr 11.40fr" : "1.5fr 10.5fr"}
      transition="grid-template-columns 0.5s"
      templateRows="1fr 11fr"
      h="100vh"
    >
      <GridItem colSpan={2}>
        <Navbar />
      </GridItem>
      <GridItem h="full" position="relative" overflowX="hidden" pr={3}>
        <Sidebar />
      </GridItem>
      <GridItem h="full" overflowY="auto">
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default Layout;
