import { useState, useCallback } from "react";
import Popover from "@mui/material/Popover";
import MenuList from "@mui/material/MenuList";
import IconButton from "@mui/material/IconButton";
import MenuItem, { menuItemClasses } from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

export function LanguageFlag({ data = [], sx, ...other }) {
  const { i18n, t } = useTranslation();
  const [locale, setLocale] = useState(data[0].value);

  const [openPopover, setOpenPopover] = useState(null);

  const changeLenguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleOpenPopover = useCallback((event) => {
    setOpenPopover(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  const handleChangeLang = useCallback(
    (newLang) => {
      setLocale(newLang);
      handleClosePopover();
    },
    [handleClosePopover],
  );

  const currentLang = data.find((lang) => lang.value === locale);

  const renderFlag = (label, icon) => (
    <Typography
      sx={{
        fontSize: { xs: 18, sm: 22, md: 22, lg: 22 },
        fontFamily: "Segoe UI ",
        margin: "0 0 0 0",
        fontWeight: "bold",
      }}
    >
      {label === "Spanish" ? "ES" : "EN"}
    </Typography>
  );

  return (
    <>
      <IconButton
        onClick={handleOpenPopover}
        title={t("flags.button")}
        sx={{
          backgroundColor: "hsla(211, 17.40%, 51.60%, 0.90)",
          border: " 0.3rem solid hsla(211, 77.50%, 15.70%, 0.80)",
          margin: { xs: "0 -2vh 0 0", md: "0 0 0 -0.6vh", lg: "0 0 0 -0.6vh" },
          width: { xs: 47, md: 55, lg: 54 },
          height: { xs: 47, md: 55, lg: 54 },
          transition: "background-color 0.3s", // Animación suave
          "&:hover": {
            backgroundColor: "hsla(187, 91.40%, 41.20%, 0.70)",
          },
          ...(openPopover && { bgcolor: "action.selected" }),
          ...sx,
        }}
        {...other}
      >
        {renderFlag(currentLang?.label, currentLang?.icon)}
      </IconButton>

      <Popover
        open={!!openPopover}
        anchorEl={openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        // El borderRadius y el fondo van en el Paper interno del Popover.
        // (MUI v5: usa PaperProps={{ sx: { ... } }} en lugar de slotProps)
        slotProps={{
          paper: {
            sx: {
              borderRadius: "1.4rem",
              overflow: "hidden",
              backgroundColor: "hsla(211, 17.40%, 51.60%, 0.90)",
              backgroundImage: "none",
              margin: { xs: "0.6vh 0 0 0.7vh", md: "0.5vh 0 0 0" },
            },
          },
        }}
      >
        <MenuList
          disablePadding
          sx={{
            gap: 0.5,
            width: 120,
            display: { xs: "flex", md: "flex", lg: "flex" },
            alignItems: { xs: "center", md: "center", lg: "center" },
            justifyContent: "center",
            maxWidth: { xs: "6vh", sm: "100%", md: "5.5vh" },
            p: " 1vh 0 1vh 0",
            flexDirection: "column",
            backgroundColor: "hsla(220, 30%, 5%, 0.7)",
            [`& .${menuItemClasses.root}`]: {
              width: 38,
              height: 38,
              minHeight: 38, // MUI pone un minHeight por defecto que deforma el círculo
              p: 0,
              justifyContent: "center",
              gap: 2,
              borderRadius: "50%", // círculo perfecto
              bgcolor: "hsla(211, 17.40%, 51.60%, 0.35)",
              opacity: 0.6,
              transition: "opacity 0.2s, background-color 0.2s",
              "&:hover": {
                backgroundColor: "hsla(187, 91.40%, 41.20%, 0.70)",
                opacity: 1,
              },
              [`&.${menuItemClasses.selected}`]: {
                bgcolor: "hsla(211, 17.40%, 51.60%, 0.90)",
                opacity: 1,
                "&:hover": {
                  backgroundColor: "hsla(187, 91.40%, 41.20%, 0.70)",
                },
              },
            },
          }}
        >
          {data?.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang?.value}
              onClick={() => {
                handleChangeLang(option.value);
                changeLenguage(option.value);
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 15, sm: 21, md: 21, lg: 21 },
                  fontFamily: "Segoe UI ",
                  margin: "0 0 0 0",
                  fontWeight: "bold",
                }}
              >
                {option.label === "Spanish" ? "ES" : "EN"}
              </Typography>
              {/* {renderFlag(option.label, option.icon)}
              {option.label} */}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
}
