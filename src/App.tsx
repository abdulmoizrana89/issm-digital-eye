import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// TODO: convert all route/pages import into lazy
import Home from "./pages/private/Home";
import EditOffice from "./pages/private/Home/Edit";
import Video from "./pages/private/Video";
import Layout from "./pages/private/Layout";
import { Analytics } from "./pages/private";
import { Suspense, lazy } from "react";

const DeviceListing = lazy(() => import("./pages/private/DeviceListing"));
const Live = lazy(() => import("./pages/private/Live"));
const Categories = lazy(() => import("./pages/private/Home/Categories"));
const Events = lazy(() => import("./pages/private/Events"));

function App() {
  return (
    <Router>
      <Routes>
        {/* TODO: create a function to implement routes, instead manually creating routes */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<EditOffice />} />
          <Route
            path="/home/office/:id"
            element={
              <Suspense fallback={<>...loading</>}>
                <Categories />
              </Suspense>
            }
          />
          <Route path="/categories" element={<Video />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route
            path="/device-listing"
            element={
              <Suspense fallback={<>...loading</>}>
                <DeviceListing />
              </Suspense>
            }
          />
          <Route
            path="/device-listing/live/:id"
            element={
              <Suspense fallback={<>...loading</>}>
                <Live />
              </Suspense>
            }
          />
          <Route
            path="/events/:id"
            element={
              <Suspense fallback={<>...loading</>}>
                <Events />
              </Suspense>
            }
          />
          <Route path="/categories" element={<Video />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
