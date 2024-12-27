import { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { LanguageFlag } from "./LanguageFlags";
import { dataLenguage } from "../../../assets/lenguageDb.js";
import { useTranslation } from "react-i18next";
import SocialMedias from "./SocialMedias.jsx";

export default function AppAppBar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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
        borderBottom:"0.16rem solid rgba(111, 176, 202, 0.71)"

      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <SocialMedias />
          <LanguageFlag data={dataLenguage} />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <SocialMedias />
          <LanguageFlag data={dataLenguage} />

          <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                top: "var(--template-frame-height, 0px)",
              },
            }}
          >
            <Box sx={{ p: 2, backgroundColor: "background.default" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Container>
    </AppBar>
    
  );
}
