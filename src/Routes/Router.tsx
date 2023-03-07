import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NoPage from "../Pages/NoPage";
import RoutesWithNavBar from "./RoutesWithNavBar";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<RoutesWithNavBar />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
