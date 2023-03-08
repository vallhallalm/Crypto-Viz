import { Routes, Route } from "react-router-dom";
import NavBar, { navBarHeight } from "../components/NavBar/NavBar";
import FirstPage from "../Pages/FirstPage";
import SecondPage from "../Pages/SecondPage";
import Box from "@mui/material/Box";
import NoPage from "../Pages/NoPage";

export default function RoutesWithNavBar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <NavBar />
      <Box sx={{ height: `calc(100% - ${navBarHeight})` }}>
        <Routes>
          <Route path="firstPage" element={<FirstPage />} />
          <Route path="secondPage" element={<SecondPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Box>
    </Box>
  );
}
