import { GitHub, Instagram, LinkedIn, Telegram } from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { RandomReveal } from "react-random-reveal";
import ThemeActionButton from "../ThemeActionButton";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        py: 3,
        background:
          "linear-gradient(180deg, rgba(30, 30, 30, 0.9) 0%, rgba(50, 50, 50, 0.7) 100%)",
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        position: "relative", // برای کنترل بهتر جایگاه
      }}
    >
      {/* ThemeActionButton با جابجایی بیشتر به سمت بیرون */}
      <Box
        sx={{
          position: "relative",
          top: "-30px", // بیشتر به سمت بالا می‌کشم
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.1)" },
        }}
      >
        <ThemeActionButton />
      </Box>

      {/* آواتار با سایه و افکت */}
      <Avatar
        src={require("../../assets/avatar.jpg")}
        variant="rounded"
        sx={{
          height: 200,
          width: 200,
          margin: "0 auto",
          display: {
            xl: "block",
            lg: "block",
            md: "none",
            sm: "none",
            xs: "none",
          },
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        YG
      </Avatar>

      {/* متن‌ها با فاصله و افکت */}
      <Typography
        variant="h6"
        color="whitesmoke"
        sx={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        <RandomReveal
          isPlaying
          duration={4}
          characters="کوروش هخامنشی"
          characterSet="آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی"
          onComplete={() => setStart(true)}
        />
      </Typography>

      {start && (
        <Typography
          variant="caption"
          color="whitesmoke"
          sx={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.4)" }}
        >
          <RandomReveal
            isPlaying
            duration={4}
            characters="توسعه دهنده فول استک"
            characterSet="آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی"
          />
        </Typography>
      )}

      {/* آیکون‌ها با افکت هاور */}
      <Box
        component="div"
        sx={{ m: "0 auto", textAlign: "center", display: "flex", gap: 1 }}
      >
        <IconButton
          aria-label="GitHub"
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.2)", color: "#fff" },
          }}
        >
          <a
            href="https://github.com/sayyehban"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub sx={{ color: "grey" }} />
          </a>
        </IconButton>
        <IconButton
          aria-label="telegram"
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.2)", color: "#00f" },
          }}
        >
          <a href="https://t.me/sayyehban" target="_blank" rel="noreferrer">
            <Telegram sx={{ color: "blue" }} />
          </a>
        </IconButton>
        <IconButton
          aria-label="instagram"
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.2)", color: "#e4405f" },
          }}
        >
          <a
            href="https://www.instagram.com/sayyehban/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram sx={{ color: "red" }} />
          </a>
        </IconButton>
        <IconButton
          aria-label="linkedin"
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.2)", color: "#0a66c2" },
          }}
        >
          <a
            href="https://www.linkedin.com/in/sayyehban/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn sx={{ color: "blue" }} />
          </a>
        </IconButton>
      </Box>
    </Box>
  );
};

export default SidebarHeader;
