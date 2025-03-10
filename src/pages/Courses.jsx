import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Slide,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import ChipInfo from "./components/ChipInfo";
import { SchoolRounded } from "@mui/icons-material";
import { courses } from "../constants/courses";
import { useEffect, useState } from "react";

// تابع کوتاه‌کننده متن
const truncateText = (text, maxLength) => {
  if (typeof text !== "string") return ""; // چک می‌کنیم که متن حتماً string باشه
  if (text.length <= maxLength) return text; // اگه طول متن کمتر یا مساوی بود، همونو برگردون
  return text.substring(0, maxLength) + "..."; // در غیر این صورت کوتاه کن و سه‌نقطه بذار
};

const Courses = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const timer = setTimeout(() => setLoading(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f9",
        padding: { xs: 2, md: 4 },
        direction: "rtl",
      }}
    >
      <Card
        elevation={5}
        sx={{
          maxWidth: 1400,
          margin: "0 auto",
          borderRadius: { xs: 4, md: 8 },
          bgcolor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <Helmet>
          <title>وب سایت شخصی کوروش هخامنشی | دوره‌های من</title>
        </Helmet>
        <CardContent>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <ChipInfo
              color="primary"
              icon={<SchoolRounded />}
              title="دوره‌های من"
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            />
          </Box>
          <Grid2 container spacing={3}>
            {courses.map((course, index) => (
              <Grid2
                key={course.id || index}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
                <Slide
                  direction="up"
                  in={loading}
                  timeout={500}
                  style={{
                    transitionDelay: loading
                      ? `${(index % 12) * 100}ms`
                      : "0ms",
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "steelblue",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <CardActionArea
                      sx={{ flexGrow: 1 }}
                      component="a"
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={course.image}
                        alt={`تصویر دوره ${course.title}`}
                        sx={{ objectFit: "cover" }}
                      />
                      <CardContent>
                        <Typography
                          variant="h6"
                          textAlign="center"
                          color="white"
                          gutterBottom
                        >
                          {course.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          textAlign="center"
                          color="rgba(255,255,255,0.8)"
                          sx={{
                            mb: 1,
                            direction: "ltr",
                          }}
                        >
                          {truncateText(course.info, 100)}
                          {/* استفاده از تابع کوتاه‌کننده */}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <Button
                      variant="contained"
                      color="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={course.link}
                      sx={{
                        m: 2,
                        borderRadius: 2,
                        backgroundColor: "white",
                        color: "steelblue",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.9)",
                        },
                      }}
                    >
                      اطلاعات بیشتر
                    </Button>
                  </Card>
                </Slide>
              </Grid2>
            ))}
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Courses;
