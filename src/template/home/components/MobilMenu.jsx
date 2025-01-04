import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";

export const MobilMenu = ({ handleButtonClick }) => {
  const { t } = useTranslation();
  const pages = [
    { text: t("pagestemplate.home"), icon: 0 },
    { text: t("pagestemplate.skills"), icon: 1 },
    { text: t("pagestemplate.projects"), icon: 2 },
    { text: t("pagestemplate.contact"), icon: 3 },
  ];
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return (
          <AccessibilityIcon
            sx={{
              color: "rgb(255, 255, 255)",
              fontSize: 34,
            }}
          />
        );
      case 1:
        return (
          <PsychologyIcon
            sx={{
              color: "rgb(255, 255, 255)",
              fontSize: 34,
            }}
          />
        );
      case 2:
        return (
          <ModelTrainingIcon
            sx={{
              color: "rgb(255, 255, 255)",
              fontSize: 34,
            }}
          />
        );
      case 3:
        return (
          <EmailIcon
            sx={{
              color: "rgb(255, 255, 255)",
              fontSize: 34,
            }}
          />
        );
      default:
        return (
          <AccessibilityIcon
            sx={{
              color: "rgb(255, 255, 255)",
              fontSize: 34,
            }}
          />
        );
    }
  };
  const DrawerList = (
    <Box
      sx={{
        backgroundColor: "rgb(16, 23, 39)",
        height: "100%",
        width: 200,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {pages.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            onClick={()=>handleButtonClick(item.icon)}
            sx={{
              color: "rgb(255, 255, 255)",
              borderBottom: " 0.1rem solid hsla(0, 0.00%, 65.50%, 0.50)",
            }}
          >
            <ListItemButton >
              <ListItemIcon>{getIcon(item.icon)}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: { sm: "none", md: "none", lg: "none" }, marginRight: "-2.2vh" }}>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon
          sx={{
            color: "hsl(211, 19.40%, 48.60%)",
            fontSize: 45,
          }}
        />
      </Button>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};
