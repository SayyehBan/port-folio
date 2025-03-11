import { Grid2, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const SidebarContainer = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid2
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{
        backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[900],
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </Grid2>
  );
};

export default SidebarContainer;
