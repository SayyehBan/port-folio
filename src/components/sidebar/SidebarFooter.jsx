import { Box, Typography } from "@mui/material";
import { FavoriteRounded, CopyrightRounded } from "@mui/icons-material";

const SidebarFooter = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        height: 100,
      }}
    >
      <Typography variant="subtitle2" color="text.primary">
        طراحی شده با{" "}
        <FavoriteRounded
          sx={{
            verticalAlign: "middle",
            color: "tomato",
            height: 20,
            animation: "heartBeat 1.5s ease infinite",
            "@keyframes heartBeat": {
              "0%": {
                transform: "scale(1)",
                color: "tomato",
              },
              "25%": {
                transform: "scale(1.2)",
                color: "pink",
              },
              "50%": {
                transform: "scale(1)",
                color: "red",
              },
              "75%": {
                transform: "scale(1.2)",
                color: "crimson",
              },
              "100%": {
                transform: "scale(1)",
                color: "tomato",
              },
            },
          }}
        />
      </Typography>

      <Typography variant="caption" color="text.primary" sx={{ mt: 2 }}>
        کپی رایت 2583{" "}
        <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
      </Typography>
    </Box>
  );
};
export default SidebarFooter;
