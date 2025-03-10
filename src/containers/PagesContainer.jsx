import { Grid2 } from "@mui/material";

const PagesContainer = ({ children }) => {
  return (
    <Grid2
      xs={12}
      sm={12}
      md={9}
      lg={10}
      xl={10}
      xxl={12}
      sx={{
        backgroundColor: "whitesmoke",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflow: "hidden",
      }}
    >
      {children}
    </Grid2>
  );
};

export default PagesContainer;
