import { GitHub, Instagram, LinkedIn, Telegram } from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { RandomReveal } from "react-random-reveal";
import ThemeActionButton from "../ThemeActionButton";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <ThemeActionButton />
      <p />
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
        }}
      >
        YG
      </Avatar>
      <Typography variant="h6" color="whitesmoke">
        <RandomReveal
          isPlaying
          duration={4}
          characters="کوروش هخامنشی"
          characterSet="آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی"
          onComplete={() => setStart(true)}
        />
      </Typography>
      <p />
      {start && (
        <Typography variant="caption" color="whitesmoke">
          <RandomReveal
            isPlaying
            duration={4}
            characters="توسعه دهنده فول استک"
            characterSet="آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی"
          />
        </Typography>
      )}
      <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
        <IconButton aria-label="GitHub">
          <a
            href="https://github.com/sayyehban"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub sx={{ color: "grey" }} />
          </a>
        </IconButton>
        <IconButton aria-label="telegram">
          <a href="https://t.me/sayyehban" target="_blank" rel="noreferrer">
            <Telegram sx={{ color: "blue" }} />
          </a>
        </IconButton>
        <IconButton aria-label="instagram">
          <a
            href="https://www.instagram.com/sayyehban/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram sx={{ color: "red" }} />
          </a>
        </IconButton>
        <IconButton aria-label="linkedin">
          <a
            href="https://www.linkedin.com/in/sayyehban/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn sx={{ color: "blue" }} />
          </a>
        </IconButton>
      </Box>
    </>
  );
};

export default SidebarHeader;
