import { Route, Routes, BrowserRouter } from "react-router-dom";

import About from "../pages/About";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Service from "../pages/Service";
import Team from "../pages/Team";

function RouteRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route element={<About />} path="/about" />
          <Route element={<Service />} path="/service" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<Team />} path="/team" />
          <Route element={<NoPage />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteRoot;
