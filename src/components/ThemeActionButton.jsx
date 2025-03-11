import { useContext, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Fab } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
import mainContext from "../context";

const ThemeActionButton = () => {
  const theme = useTheme();
  const { handleThemeChange } = useContext(mainContext);
  const [animate, setAnimate] = useState(false); // برای کنترل انیمیشن

  const handleClick = () => {
    setAnimate(true); // شروع انیمیشن
    handleThemeChange(); // تغییر تم
  };

  return (
    <Box
      sx={{
        position: "absolute",
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Fab
        aria-label="ThemeChanger"
        variant="extended"
        size="small"
        color="secondary"
        onClick={handleClick}
        onAnimationEnd={() => setAnimate(false)} // پایان انیمیشن
        sx={{
          ml: 2,
          color: "whitesmoke",
          position: "relative", // برای افکت هاله
          overflow: "hidden",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)", // زوم نرم موقع هاور
            boxShadow:
              theme.palette.mode === "light"
                ? "0 0 15px rgba(255, 215, 0, 0.7)" // هاله زرد برای روز
                : "0 0 15px rgba(135, 206, 250, 0.7)", // هاله آبی برای شب
          },
          // انیمیشن تغییر تم
          animation: animate
            ? theme.palette.mode === "light"
              ? "sunrise 1s ease-in-out"
              : "moonlight 1s ease-in-out"
            : "none",
        }}
      >
        {/* آیکون‌ها با افکت چرخش نرم */}
        {theme.palette.mode === "light" ? (
          <WbSunnyOutlined
            sx={{
              mr: 1,
              transition: "transform 0.5s ease-in-out",
              transform: animate ? "rotate(360deg)" : "rotate(0deg)",
            }}
          />
        ) : (
          <NightlightOutlined
            sx={{
              mr: 1,
              transition: "transform 0.5s ease-in-out",
              transform: animate ? "rotate(360deg)" : "rotate(0deg)",
            }}
          />
        )}
        {/* متن دکمه با افکت محو شدن */}
        <Box
          sx={{
            opacity: animate ? 0 : 1,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {theme.palette.mode === "light" ? "روز" : "شب"}
        </Box>

        {/* هاله انیمیشن برای جلوه بیشتر */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              theme.palette.mode === "light"
                ? "radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent)"
                : "radial-gradient(circle, rgba(135, 206, 250, 0.3), transparent)",
            opacity: animate ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      </Fab>

      {/* تعریف انیمیشن‌ها */}
      <style>
        {`
          @keyframes sunrise {
            0% { box-shadow: 0 0 0 rgba(255, 215, 0, 0); }
            50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
            100% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.4); }
          }
          @keyframes moonlight {
            0% { box-shadow: 0 0 0 rgba(135, 206, 250, 0); }
            50% { box-shadow: 0 0 20px rgba(135, 206, 250, 0.8); }
            100% { box-shadow: 0 0 10px rgba(135, 206, 250, 0.4); }
          }
        `}
      </style>
    </Box>
  );
};

export default ThemeActionButton;
