import { Card, CardContent, Grid2, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import ChipInfo from "./components/ChipInfo";
import {
  HomeRepairServiceRounded,
  SchoolRounded,
  SettingsEthernetRounded,
} from "@mui/icons-material";

// فرض می‌کنم devEdu دیتای واقعیته و از constants/details میاد
import { devEdu, education, experiences } from "../constants/details";
import MyTimeLine from "./components/MyTimeLine";

const Resume = () => {
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
          maxWidth: 1200,
          margin: "0 auto",
          borderRadius: { xs: 4, md: 8 },
          bgcolor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <Helmet>
          <title>وب سایت شخصی کوروش هخامنشی | رزومه</title>
        </Helmet>
        <CardContent>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <ChipInfo
              color="error"
              icon={<SettingsEthernetRounded />}
              title="رزومه من"
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            />
          </Box>

          <Grid2 container spacing={4}>
            <Grid2 xs={12} md={6}>
              <Box sx={{ textAlign: "center", mb: 2 }}>
                <ChipInfo
                  color="warning"
                  icon={<HomeRepairServiceRounded />}
                  title="تجربیات"
                />
              </Box>
              <MyTimeLine
                position={"right"}
                color={"warning"}
                icon={<HomeRepairServiceRounded color="warning" />}
                data={experiences}
              />
            </Grid2>

            <Grid2 xs={12} md={6}>
              <Box sx={{ textAlign: "center", mb: 2 }}>
                <ChipInfo
                  color="info"
                  icon={<SchoolRounded />}
                  title="تحصیلات"
                />
              </Box>
              <MyTimeLine
                position={"right"}
                data={education}
                color={"info"}
                icon={<SchoolRounded color="info" />}
              />

              {/* بخش DevEdu زیر تحصیلات */}
              <Box sx={{ mt: 4 }}>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <ChipInfo
                    color="success"
                    icon={<SchoolRounded />}
                    title="تحصیلات"
                  />
                </Box>
                <MyTimeLine
                  position={"right"}
                  data={devEdu}
                  color={"success"}
                  icon={<SchoolRounded color="success" />}
                />
              </Box>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Resume;
