import Button from "@mui/material/Button";
import { NavigateFunction } from "react-router-dom";

interface NavButtonProps {
  to: string;
  content: string;
  currentPathName: string;
  navigate: NavigateFunction;
}

export default function NavButton({
  to,
  content,
  currentPathName,
  navigate,
}: NavButtonProps) {
  const isActiveMenu = to === currentPathName;
  return (
    <Button
      sx={{
        borderRadius: 0,
        borderBottom: isActiveMenu ? "red 2px solid" : "",
      }}
      onClick={() => navigate(to)}
    >
      {content}
    </Button>
  );
}
