import { Box, Typography, LinearProgress } from "@mui/material";
import ChipInfo from "./ChipInfo";
import Badge from "@mui/material/Badge";

const Skill = ({ icon, color, name, value }) => {
  return (
    <Box
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 3,
        p: 2,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
        },
        width: "100%", // مطمئن می‌شیم کل عرض رو بگیره
      }}
    >
      <ChipInfo
        icon={<Box component="img" src={icon} sx={{ height: 30, mr: 1 }} />}
        title={name}
        color={color}
        sx={{
          fontSize: "1.1rem",
          background: `linear-gradient(45deg, ${color}.main, ${color}.light)`,
          color: "white",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Box sx={{ minWidth: 45, mr: 2 }}>
          <Typography variant="body1" fontWeight={600} color="text.primary">
            <Badge
              color={color}
              badgeContent={`${Math.round(value)}%`}
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  padding: "4px 8px",
                  borderRadius: "12px",
                },
              }}
            />
          </Typography>
        </Box>
        <Box sx={{ width: "100%", bgcolor: "grey.200", borderRadius: 2 }}>
          <LinearProgress
            variant="determinate"
            value={Math.round(value)}
            color={color}
            sx={{
              height: 12,
              borderRadius: 2,
              backgroundColor: "grey.300",
              "& .MuiLinearProgress-bar": {
                borderRadius: 2,
                background: `linear-gradient(90deg, ${color}.main, ${color}.light)`,
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;
