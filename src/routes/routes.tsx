import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../contexts/auth/requireAuth";
import { Home, PrivatePage } from "../pages/index";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/private"
        element={
          <RequireAuth>
            <PrivatePage />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
