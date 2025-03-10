import { Box, Typography } from "@mui/material";

const DevInfo = ({ icon, title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Typography color="black">{title}</Typography> {icon}
    </Box>
  );
};
export default DevInfo;
