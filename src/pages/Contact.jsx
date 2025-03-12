import { Box, Card, CardContent, useTheme } from "@mui/material";
import { Helmet } from "react-helmet-async";
import ChipInfo from "./components/ChipInfo";
import { Face6Rounded } from "@mui/icons-material";

const Contact = () => {
  const theme = useTheme();
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
          maxWidth: 1400,
          margin: "0 auto",
          borderRadius: { xs: 4, md: 8 },
          bgcolor: theme.palette.background.paper,
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <Helmet>
          <title>وب سایت شخصی کوروش هخامنشی | ارتباط با ما</title>
        </Helmet>
        <CardContent>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <ChipInfo
              color="success"
              icon={<Face6Rounded />}
              title="ارتباط با من"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: theme.palette.text.primary,
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Contact;
