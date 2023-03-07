import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { jsonCryptoPanic } from "./CryptoPanicReturns";
import { newsCryptoPanic } from "./utils";

function displayNews() {
  const news = jsonCryptoPanic.results as newsCryptoPanic[];
  const newsDisplayed = news.map((newsX) => {
    const publishingDate = new Date(newsX.published_at);
    return (
      <Box key={newsX.id} sx={{ border: "1px solid #555555" }}>
        <Typography>{publishingDate.toString()}</Typography>
        <Typography sx={{ fontWeight: "bold" }}>{newsX.title}</Typography>
        <a href={newsX.url} target="_blank" rel="noreferrer">
          <Typography sx={{ fontStyle: "italic" }}>{newsX.url}</Typography>
        </a>
      </Box>
    );
  });
  return newsDisplayed;
}

interface NewsDisplayerProps {
  sx?: SxProps;
}

export default function NewsDisplayer({ sx }: NewsDisplayerProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 1,
        margin: 1,
        padding: 1,
        border: "1px solid #222222",
        "& > div:nth-of-type(even)": { backgroundColor: "#FEFEFE" },
        "& > div:nth-of-type(odd)": { backgroundColor: "#F0F0F0" },
        ...sx,
      }}
    >
      {displayNews()}
    </Box>
  );
}
