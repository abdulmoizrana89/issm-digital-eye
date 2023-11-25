import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// TODO: convert all route/pages import into lazy
import Home from "./pages/private/Home";
import EditOffice from "./pages/private/Home/Edit";
import Video from "./pages/private/Video";
import Layout from "./pages/private/Layout";
import { Analytics, AppCategories } from "./pages/private";

function App() {
  return (
    <Router>
      <Routes>
        {/* TODO: create a function to implement routes, instead manually creating routes */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<EditOffice />} />
          <Route path="/categories" element={<Video />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/application" element={<AppCategories />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
