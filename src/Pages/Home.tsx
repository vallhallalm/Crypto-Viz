import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: 40,
        }}
      >
        Crypto-viz
      </Typography>
      <Button
        sx={{
          backgroundColor: "#FCC300",
          ":hover": { backgroundColor: "#FFD860" },
        }}
        onClick={() => navigate("/firstPage")}
      >
        Go
      </Button>
    </Box>
  );
}
