import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import ChipInfo from "./components/ChipInfo";
import { ForumRounded } from "@mui/icons-material";
import { userComments } from "../constants/details";
import Slider from "react-slick";
const Comments = () => {
  const theme = useTheme();
  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        padding: { xs: 2, md: 4 },
        direction: "rtl",
      }}
    >
      <Card
        elevation={5}
        sx={{
          maxWidth: 1200,
          margin: "0 auto",
          borderRadius: { xs: 4, md: 8 },
          bgcolor: theme.palette.background.paper,
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <Helmet>
          <title>وب سایت شخصی کوروش هخامنشی | نظرات دانشجویان</title>
        </Helmet>
        <CardContent>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <ChipInfo
              color="success"
              icon={<ForumRounded />}
              title="نظرات دانشجویان"
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              mt: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Slider {...options}>
              {userComments.map((comment, index) => (
                <Box
                  key={index}
                  component="div"
                  sx={{ justifyContent: "center" }}
                >
                  <Avatar
                    src={comment.avatar}
                    variant="rounded"
                    sx={{
                      width: 100,
                      height: 100,
                      margin: "0 auto",
                    }}
                  />
                  <Typography
                    variant="body1"
                    textAlign="center"
                    color={theme.palette.text.primary}
                  >
                    {comment.fullname}
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    color={theme.palette.text.primary}
                    sx={{ mb: 2 }}
                  >
                    {comment.jobTitle}
                  </Typography>
                  <Card
                    sx={{
                      backgroundColor: "lightsalmon",
                      width: 1 / 2,
                      m: "0 auto",
                      borderRadius: 5,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="body2"
                        textAlign="center"
                        color={theme.palette.text.primary}
                      >
                        {comment.comment}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Comments;
