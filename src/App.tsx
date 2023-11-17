import { Navbar, Sidebar } from "./layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Grid } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Grid
          templateColumns="2fr 12fr"
          gridTemplateRows="min-content"
          pt="100px"
        >
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Grid>
      </Router>
    </>
  );
}

export default App;
