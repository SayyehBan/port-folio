import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  InputAdornment,
  Slide,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import ChipInfo from "./components/ChipInfo";
import {
  AccountCircle,
  EmailRounded,
  Face6Rounded,
  SubjectRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import worldMap from "../assets/map.svg";
import { useFormik } from "formik";
import { validationSchema } from "./validations/contactValidation";

const FORM_FIELDS = [
  {
    name: "fullname",
    label: "نام و نام خانوادگی",
    icon: <Face6Rounded />,
    xs: 12,
    md: 6,
  },
  {
    name: "email",
    label: "آدرس ایمیل",
    icon: <EmailRounded />,
    xs: 12,
    md: 6,
  },
  {
    name: "subject",
    label: "عنوان",
    icon: <SubjectRounded />,
    xs: 12,
    md: 12,
  },
  {
    name: "message",
    label: "متن پیام",
    multiline: true,
    rows: 6,
    xs: 12,
    md: 12,
  },
];

const Contact = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => setLoading(false);
  }, []);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        padding: { xs: 2, md: 4 },
        direction: "ltr",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Card
        elevation={8}
        sx={{
          maxWidth: 1400,
          margin: "0 auto",
          borderRadius: { xs: 4, md: 8 },
          bgcolor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px rgba(31, 38, 135, 0.2)",
          overflow: "hidden",
        }}
      >
        <Helmet>
          <title>وب سایت شخصی کوروش هخامنشی | ارتباط با ما</title>
        </Helmet>
        <CardContent sx={{ p: { xs: 2, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <ChipInfo
              color="warning"
              icon={<AccountCircle />}
              title="ارتباط با من"
              sx={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                color: theme.palette.text.primary,
                borderRadius: "16px",
                px: 3,
                py: 1,
              }}
            />
          </Box>
          <Grid2 container spacing={3}>
            <Slide
              direction="up"
              in={loading}
              style={{ transitionDelay: loading ? "200ms" : "0ms" }}
            >
              <Grid2 size={{ xs: 12, md: 8 }}>
                <Card
                  sx={{
                    p: 2,
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 4,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <form onSubmit={formik.handleSubmit} autoComplete="off">
                    <CardContent>
                      <Grid2 container spacing={2}>
                        {FORM_FIELDS.map((field) => (
                          <Grid2
                            size={{ xs: field.xs, md: field.md }}
                            key={field.name}
                          >
                            <TextField
                              fullWidth
                              size="small"
                              color="warning"
                              label={field.label}
                              name={field.name}
                              variant="filled"
                              multiline={field.multiline || false}
                              rows={field.rows || 1}
                              value={formik.values[field.name]}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={
                                formik.touched[field.name] &&
                                Boolean(formik.errors[field.name])
                              }
                              helperText={
                                formik.touched[field.name] &&
                                formik.errors[field.name]
                              }
                              dir="ltr"
                              InputProps={{
                                startAdornment: field.icon ? (
                                  <InputAdornment position="end">
                                    {field.icon}
                                  </InputAdornment>
                                ) : null,
                              }}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: "12px",
                                  transition: "all 0.3s ease",
                                  "&:hover": {
                                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
                                    borderColor: theme.palette.text.main,
                                  },
                                  "&.Mui-focused": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                      borderLeftWidth: "3px",
                                      borderLeftColor: theme.palette.text.main,
                                      borderColor: theme.palette.grey[400],
                                    },
                                  },
                                  "& input": {
                                    textAlign: "right",
                                  },
                                  "& textarea": {
                                    textAlign: "right",
                                  },
                                },
                                "& .MuiInputLabel-root": {
                                  left: "14px",
                                  right: "auto",
                                  transformOrigin: "top right",
                                  color: theme.palette.text.secondary,
                                  "&:not(.Mui-focused)": {
                                    transform: "translate(14px, 16px) scale(1)",
                                  },
                                },
                                "& .MuiInputLabel-shrink": {
                                  transform:
                                    "translate(14px, -9px) scale(0.75)",
                                  color: theme.palette.text.main,
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: theme.palette.grey[300],
                                  "& > legend": {
                                    marginLeft: "14px",
                                    textAlign: "left",
                                  },
                                },
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    "& > legend": {
                                      marginLeft: "14px",
                                    },
                                  },
                              }}
                            />
                          </Grid2>
                        ))}
                      </Grid2>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center", mt: 2 }}>
                      <Button
                        type="submit"
                        color="success"
                        variant="contained"
                        sx={{
                          borderRadius: "12px",
                          px: 4,
                          py: 1,
                          fontWeight: "bold",
                          boxShadow: "0 4px 15px rgba(0, 128, 0, 0.3)",
                          "&:hover": {
                            boxShadow: "0 6px 20px rgba(0, 128, 0, 0.4)",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        ارسال کن
                      </Button>
                    </CardActions>
                  </form>
                </Card>
              </Grid2>
            </Slide>
            <Slide
              direction="up"
              in={loading}
              style={{ transitionDelay: loading ? "200ms" : "0ms" }}
            >
              <Grid2
                size={{ xs: 0, sm: 0, md: 4 }}
                sx={{
                  textAlign: "center",
                  backgroundImage: `url(${worldMap})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <Typography
                  variant="h6"
                  color="text.primary"
                  sx={{
                    fontFamily: "vazir",
                    fontWeight: "bold",
                    mt: 4,
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                >
                  بیا در مورد همه چیز باهم صحبت کنیم
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    mt: 2,
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                >
                  👋{" "}
                  <a
                    href="mailto:younes.gh@chmail.ir"
                    style={{
                      color: theme.palette.warning.main,
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    ایمیل
                  </a>{" "}
                  بزن به من
                </Typography>
              </Grid2>
            </Slide>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;
