import { Typography, Container, Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Typed } from "react-typed";
import TextTransition, { presets } from "react-text-transition";
import ParticlesLoad from "../constants/ParticlesLoad";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const nameEl = useRef(null);
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "مدرس برنامه نویسی",
    "توسعه دهنده فول استک",
    "طراح رابط کاربری",
    "برنامه نویس موبایل",
    "مشاور فنی پروژه های نرم افزاری",
    "متخصص امنیت وب",
  ];

  const strings = [
    "کوروش بزرگ",
    "کمبوجیه",
    "داریوش بزرگ",
    "خشایارشاه",
    "اردشیر یکم",
    "داریوش دوم",
    "اردشیر دوم",
    "اردشیر سوم",
    "داریوش سوم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: strings,
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      showCursor: false,
      loop: true,
    });

    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);

    return () => {
      typedName.destroy();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: "linear-gradient(45deg, #1a237e 30%, #311b92 90%)",
      }}
    >
      <Helmet>
        <title>وب سایت شخصی کوروش هخامنشی | صفحه اصلی</title>
      </Helmet>
      <ParticlesLoad />
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        <Typography
          ref={nameEl}
          variant="h2"
          sx={{
            color: "tomato",
            fontWeight: "bold",
            marginBottom: 3,
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          کوروش هخامنشی
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "whitesmoke",
            textDecorationColor: "tomato",
            textDecorationThickness: "4px",
            textUnderlineOffset: "8px",
            fontWeight: "500",
          }}
        >
          <TextTransition springConfig={presets.wobbly} direction="up">
            من یک {TEXTS[index % TEXTS.length]}
          </TextTransition>
          <Typography
            variant="h4"
            sx={{
              color: "whitesmoke",
              mt: 4,
              mr: 1,
              textAlign: "center",
              justifyContent: "center",
            }}
          ></Typography>
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
