import { Chip, Slide } from "@mui/material";
import { useEffect, useState } from "react";

const ChipInfo = ({ color = "primary", icon, title }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Slide
      direction="down"
      in={loading}
      style={{
        transitionDelay: loading ? "200ms" : "0ms",
      }}
    >
      <Chip
        color={color}
        icon={icon}
        label={title}
        sx={{
          mt: 1,
          p: 2,
          position: "relative",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            width: "100%",
            borderTop: "1px solid",
            borderColor: (theme) => theme.palette[color]?.main || color,
            transform: "translateY(-50%)",
          },
          "&::before": {
            right: "100%",
            marginRight: "8px",
          },
          "&::after": {
            left: "100%",
            marginLeft: "8px",
          },
        }}
      />
    </Slide>
  );
};

export default ChipInfo;
