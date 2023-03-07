import { Routes, Route } from "react-router-dom";
import NavBar, { navBarHeight } from "../components/NavBar/NavBar";
import LoremIpsum from "../Pages/LoremIpsum";
import LoremIpsum2 from "../Pages/LoremIpsum2";
import Box from "@mui/material/Box";
import NoPage from "../Pages/NoPage";

export default function RoutesWithNavBar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <NavBar />
      <Box sx={{ height: `calc(100% - ${navBarHeight})` }}>
        <Routes>
          <Route path="firstPage" element={<LoremIpsum />} />
          <Route path="secondPage" element={<LoremIpsum2 />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Box>
    </Box>
  );
}
