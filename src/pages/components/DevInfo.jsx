import { Box, Typography, useTheme } from "@mui/material";

const DevInfo = ({ icon, title }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Typography color={theme.palette.mode === "dark"}>{title}</Typography>{" "}
      {icon}
    </Box>
  );
};
export default DevInfo;
