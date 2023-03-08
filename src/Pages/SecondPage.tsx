import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NewsDisplayer from "../components/API/CryptoPanic/NewsDisplayer";

export default function SecondPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        fermentum leo quis tortor lobortis ullamcorper.
      </Typography>
      <NewsDisplayer />
    </Box>
  );
}
