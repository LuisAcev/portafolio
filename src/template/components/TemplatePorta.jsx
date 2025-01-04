import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import "./style.css";
export const TemplatePorta = ({ component, componenteName }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        background: "#141E30" /* fallback for old browsers */,
        background:
          "-webkit-linear-gradient(to left, #243B55, #141E30)" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to left, #243B55, #141E30)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        boxShadow: "inset 0 0 30rem rgba(0, 0, 0, .5)",
        flexDirection: "row",
        height: { xs: "100%", md: "100vh", lg: "100vh" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "12%",
          backgroundColor: " hsla(222, 25.50%, 10.00%, 0.50)",
          borderRight: "0.16rem solid rgba(111, 176, 202, 0.71)",
        }}
      >
        <Typography
          sx={{
            color: "hsla(211, 17.40%, 51.60%, 0.80)",
            fontSize: { xs: 30, sm: 55, md: 90, lg: 90 },
            fontWeight: "bold",
            margin: { xs: "34rem 0 0 0", md: "26rem 0 0 0", lg: "27rem 0 0 0" },
            transform: "rotate(270deg)",
          }}
        >
          {t(`pagestemplate.${componenteName}`)}
        </Typography>
        <img
          src={"/assets/4.jpg"} // imagen de fondo
          className="hidden-mobile"
        />
      </Box>
      <Box sx={{ margin: "0 0 0 2rem", width: "100%" }}>{component}</Box>
    </Box>
  );
};
