import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { LanguageFlag } from "./LanguageFlags";
import { dataLenguage } from "../../../assets/lenguageDb.js";
import SocialMedias from "./SocialMedias.jsx";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { MobilMenu } from "./MobilMenu.jsx";

export default function AppAppBar({ handleButtonClick }) {
  const { t } = useTranslation();
  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        background:
          "-webkit-linear-gradient(to left, #243B55,rgb(81, 94, 121))" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to left, #243B55,rgb(64, 78, 105))" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        height: "5rem",
        padding: "0.8rem 0 0 0",
        boxShadow: "inset 0 0 30rem hsla(210, 53.40%, 28.60%, 0.90)",
        borderBottom: "0.16rem solid rgba(111, 176, 202, 0.71)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 20, md: 20, lg: 20 },
              fontFamily: "Segoe UI ",
              margin: "0 0 0 0",
            }}
          >
            {t("flags.email")}
          </Typography>

          <SocialMedias />
          <LanguageFlag data={dataLenguage} />
          <MobilMenu handleButtonClick={handleButtonClick} />
        </Box>
      </Container>
    </AppBar>
  );
}
