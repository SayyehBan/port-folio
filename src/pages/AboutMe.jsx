import {
  CodeRounded,
  EmailRounded,
  LocationOnRounded,
  PhoneRounded,
  PersonRounded,
  SelfImprovementRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  Grid2,
  Typography,
  Box,
  Container,
  Tooltip,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DevInfo from "./components/DevInfo";
import ChipInfo from "./components/ChipInfo";
import Skill from "./components/Skill";
import { devSkills } from "../constants/skills";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { devWorkInfo } from "../constants/details";
import CountUp from "react-countup";

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [javaScript, setJavaScript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [react, setReact] = useState(0);
  const [node, setNode] = useState(0);
  const [git, setGit] = useState(0);

  const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } =
    devSkills;

  useEffect(() => {
    const timer = setInterval(() => {
      const calculateProgress = (targetValue) =>
        Math.min(Math.floor(Math.random() * targetValue), targetValue);
      setJavaScript(calculateProgress(82));
      setHtml(calculateProgress(95));
      setCss(calculateProgress(73));
      setReact(calculateProgress(95));
      setNode(calculateProgress(86));
      setGit(calculateProgress(66));
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        padding: { xs: 2, md: 4 },
        direction: "rtl",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Helmet>
          <title>وب سایت شخصی کوروش هخامنشی | درباره من</title>
        </Helmet>
        <Card
          elevation={10}
          sx={{
            mt: 4,
            borderRadius: { xs: 4, md: 8 },
            bgcolor: theme.palette.background.paper,
            backdropFilter: "blur(15px)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            overflow: "hidden",
          }}
        >
          <CardContent
            sx={{
              minHeight: "90vh",
              py: { xs: 4, md: 8 },
              px: { xs: 3, md: 6 },
              background: theme.palette.background.default,
            }}
          >
            <Grid2
              container
              spacing={{ xs: 3, md: 6 }}
              alignItems="center"
              justifyContent="center"
            >
              {/* بخش آواتار و اطلاعات اصلی */}
              <Grid2 xs={12} md={4} sx={{ textAlign: "center" }}>
                <Avatar
                  src={require("../assets/avatar.jpg")}
                  variant="rounded"
                  sx={{
                    width: { xs: 200, sm: 250, md: 300 },
                    height: { xs: 200, sm: 250, md: 300 },
                    margin: "0 auto",
                    boxShadow: theme.shadows[10],
                    border: "6px solid",
                    borderColor: "primary.main",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.08) rotate(2deg)",
                      boxShadow: theme.shadows[20],
                    },
                  }}
                >
                  KKH
                </Avatar>
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  sx={{
                    mt: 3,
                    fontWeight: 900,
                    color: "primary.main",
                    background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "1px",
                  }}
                >
                  کوروش هخامنشی
                </Typography>
                <ChipInfo
                  icon={<CodeRounded />}
                  title="توسعه‌دهنده فول استک"
                  color="primary"
                  sx={{
                    mt: 2,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    padding: { xs: "12px 24px", md: "15px 30px" },
                    background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                    color: "white",
                    boxShadow: theme.shadows[3],
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: theme.shadows[6],
                    },
                  }}
                />
              </Grid2>

              {/* اطلاعات شخصی */}
              <Grid2 xs={12} md={8}>
                <Box
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: { xs: 3, md: 5 },
                    background: theme.palette.background.paper,
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
                    },
                  }}
                >
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    sx={{
                      fontWeight: 700,
                      color:
                        theme.palette.mode === "dark"
                          ? "common.white"
                          : theme.palette.text.primary,
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(90deg, #90caf9, #42a5f5)"
                          : "linear-gradient(90deg, #1976d2, #42a5f5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      borderBottom: "3px solid",
                      borderColor: "primary.main",
                      pb: 1,
                      mb: 3,
                    }}
                  >
                    اطلاعات شخصی
                  </Typography>
                  <Grid2 container spacing={{ xs: 2, md: 4 }}>
                    <Grid2 xs={12} sm={6}>
                      <DevInfo
                        icon={
                          <PersonRounded
                            sx={{
                              mr: 2,
                              fontSize: { xs: "1.5rem", md: "2rem" },
                              color: "primary.main",
                            }}
                          />
                        }
                        title="سن: 33 سال"
                      />
                      <DevInfo
                        icon={
                          <LocationOnRounded
                            sx={{
                              mr: 2,
                              fontSize: { xs: "1.5rem", md: "2rem" },
                              color: "primary.main",
                            }}
                          />
                        }
                        title="شهر: بابل"
                      />
                    </Grid2>
                    <Grid2 xs={12} sm={6}>
                      <DevInfo
                        icon={
                          <EmailRounded
                            sx={{
                              mr: 2,
                              fontSize: { xs: "1.5rem", md: "2rem" },
                              color: "primary.main",
                            }}
                          />
                        }
                        title="kk.khakhamshii@gmail.com : ایمیل"
                      />
                      <DevInfo
                        icon={
                          <PhoneRounded
                            sx={{
                              mr: 2,
                              fontSize: { xs: "1.5rem", md: "2rem" },
                              color: "primary.main",
                            }}
                          />
                        }
                        title="تلفن: 09123456789"
                      />
                    </Grid2>
                  </Grid2>
                </Box>
              </Grid2>

              {/* بخش کارها و دستاوردها */}
              <Grid2
                xs={12}
                sm={12}
                md={3}
                lg={3}
                sx={{
                  mt: 4,
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: "center",
                }}
              >
                {devWorkInfo.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "calc(50% - 8px)", md: "100%" },
                      mb: { xs: 0, md: 1 },
                    }}
                  >
                    <Tooltip title={item.tooltipTitle} placement="right" arrow>
                      <Chip
                        icon={item.icon}
                        label={
                          <Typography
                            variant="body1"
                            sx={{
                              color:
                                theme.palette.mode === "dark"
                                  ? "common.white"
                                  : item.color,
                              fontWeight: 600,
                            }}
                          >
                            <CountUp
                              start={0}
                              end={item.total}
                              duration={2.5}
                            />
                          </Typography>
                        }
                        sx={{
                          p: { xs: 2, md: 3 },
                          background: `linear-gradient(45deg, ${item.color}, ${item.color}80)`,
                          width: "100%",
                          borderRadius: "12px",
                          transition: "all 0.4s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                          },
                        }}
                      />
                    </Tooltip>
                  </Box>
                ))}
              </Grid2>
            </Grid2>

            {/* بخش مهارت‌ها */}
            <Grid2
              container
              sx={{ width: "100%", mt: { xs: 6, md: 8 } }}
              alignItems="center"
              justifyContent="center"
            >
              <Box sx={{ width: "100%", px: { xs: 2, md: 4 } }}>
                <ChipInfo
                  icon={
                    <SelfImprovementRounded
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        color: "white",
                      }}
                    />
                  }
                  title="مهارت‌های من"
                  color="primary"
                  sx={{
                    mb: 5,
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    padding: { xs: "15px 30px", md: "20px 40px" },
                    background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                    color: "white",
                    boxShadow: theme.shadows[5],
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: theme.shadows[8],
                    },
                  }}
                />
                <p />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 2, md: 3 },
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  {[
                    { skill: htmlSkill, value: html },
                    { skill: cssSkill, value: css },
                    { skill: reactSkill, value: react },
                    { skill: nodeSkill, value: node },
                    { skill: jsSkill, value: javaScript },
                    { skill: gitSkill, value: git },
                  ].map(({ skill, value }, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: "100%",
                        maxWidth: { xs: "100%", md: "600px" },
                      }}
                    >
                      <Skill
                        icon={skill.icon}
                        name={skill.name}
                        value={value}
                        color={skill.color}
                        sx={{
                          transition: "transform 0.4s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                          width: "100%",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid2>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutMe;
