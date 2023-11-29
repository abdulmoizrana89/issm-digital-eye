import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "../../../layout";

function Layout() {
  return (
    <Grid templateColumns="1.5fr 10.5fr" templateRows="1fr 11fr" minH="inherit">
      <GridItem colSpan={2}>
        <Navbar />
      </GridItem>
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default Layout;
