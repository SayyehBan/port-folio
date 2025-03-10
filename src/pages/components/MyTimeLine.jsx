import { Box, Slide, Typography } from "@mui/material";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { useEffect, useState } from "react";
const MyTimeLine = ({ position, color, icon, data }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Timeline position={position} sx={{ mt: 2 }}>
      {data.map((item, index) => (
        <Slide
          direction="up"
          in={loading}
          style={{ transitionDelay: loading ? `${index + 3}99ms` : "0ms" }}
        >
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                color={color}
                sx={{
                  boxShadow: "0 0 8px rgba(0, 188, 212, 0.5)",
                  backgroundColor: "#fff",
                }}
              >
                {icon}
              </TimelineDot>
              {index !== data.length - 1 && (
                <TimelineConnector
                  sx={{ backgroundColor: "#00bcd4", width: "2px" }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: 2 }}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography
                  variant="caption"
                  color="black"
                  sx={{ display: "block", mb: 0.5 }}
                >
                  {item.year}
                </Typography>
                <Typography
                  variant="body1"
                  color="black"
                  sx={{ fontWeight: "bold", mb: 0.5 }}
                >
                  {item.cert}
                </Typography>
                <Typography variant="body2" color="black" sx={{ mb: 0.5 }}>
                  {item.major}
                </Typography>
                <Typography variant="body2" color="black" sx={{ opacity: 0.8 }}>
                  {item.place}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};
export default MyTimeLine;
