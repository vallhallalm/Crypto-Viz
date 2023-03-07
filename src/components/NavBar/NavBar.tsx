import AppBar from "@mui/material/AppBar";
import { useLocation, useNavigate } from "react-router-dom";
import NavButton from "./NavButton";

export const navBarHeight = "50px";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPathName = location.pathname;

  return (
    <>
      <AppBar // An invisible AppBar to take space of the fixed real AppBar
        sx={{
          height: navBarHeight,
          position: "static",
          visibility: "hidden",
        }}
      />
      <AppBar // The fixed real AppBar
        sx={{
          height: navBarHeight,
          backgroundColor: "#FFFFFF",
          position: "fixed",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <NavButton
          to="/"
          content="Accueil"
          currentPathName={currentPathName}
          navigate={navigate}
        />
        <NavButton
          to="/firstPage"
          content="First Page"
          currentPathName={currentPathName}
          navigate={navigate}
        />
        <NavButton
          to="/secondPage"
          content="Second Page"
          currentPathName={currentPathName}
          navigate={navigate}
        />
      </AppBar>
    </>
  );
}
