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
        // Misma familia de color que la capa del Swiper y de TemplatePorta
        background: "hsla(211, 97%, 13%, 0.75)",
        // Desenfoca lo que pasa por detrás (efecto vidrio)
        backdropFilter: "blur(10px)",
        height: "5rem",
        padding: "0.8rem 0 0 0",
        boxShadow: "none",
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
              margin: "0 1vh 0 0",
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
