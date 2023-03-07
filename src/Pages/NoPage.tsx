import Typography from "@mui/material/Typography";

export default function NoPage() {
  return (
    <Typography
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      404 not found
    </Typography>
  );
}
