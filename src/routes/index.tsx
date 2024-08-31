import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";

import { Home } from "../pages/home";
import { PostDetails } from "../pages/post";

export function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:issueNumber" element={<PostDetails />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}
