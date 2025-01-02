import { Avatar, Box, Button, CssBaseline, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { Model } from "./3DModel/Model";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        boxShadow: "inset 0 0 30rem rgba(0, 0, 0, .5)",
        background:
          "url(assets/3.jpg) no-repeat top center, linear-gradient(to left, #243B55, #141E30) no-repeat bottom center",
        backgroundSize: "100% 68%, 100% 50%",
      }}
    >
      <CssBaseline enableColorScheme />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          href={
            t("home.cv") == "Descargar CV"
              ? "https://drive.google.com/file/d/1Gl3E6h8x7mffFUPxSu7HOcTHwzA3OkfA/view?usp=sharing"
              : "https://drive.google.com/file/d/1VPJ2NqHJyABuM1bY72JJsDCozhV1oIG7/view?usp=sharing"
          }
          sx={{
            backgroundColor: "hsla(187, 90.30%, 51.40%, 0.3)",
            border: "0.2rem solid rgba(104, 126, 136, 0.9)",
            borderRadius: "1.5rem",
            color: "rgba(255, 255, 255, 0.9)",
            margin: "82vh 0 0 90vh",
            position: "absolute",
            width: "22vh",
            zIndex: 2,
            transition: "background-color 0.3s", // Animación suave
            "&:hover": {
              backgroundColor: "hsla(187, 90.30%, 51.40%, 0.8)",
            },
          }}
        >
          {t("home.cv")}
        </Button>
        <Box
          sx={{
            backgroundColor: "hsla(210, 55.70%, 45.10%, 0.3)",
            borderRadius: "100rem",
            boxShadow: "inset 0 0 30rem rgba(0, 0, 0, .5)",
            height: "85vh",
            margin: " 6.5rem 0 0 3rem",
            width: "85vh",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              justifyContent: "flex-start",
              width: "125vh",
              height: "86vh",
              padding: "0 0 0 0",
              margin: "0 0 0 -5rem",
              zIndex: 1,
            }}
          >
            <Model />
          </Box>
        </Box>
        <Box sx={{ justifyContent: "flex-end", margin: "10rem 0 0 9rem" }}>
          <Avatar
            alt="picture"
            src="assets/projectPictures/avatar.jpg"
            sx={{
              width: 300,
              height: 300,
              marginBottom: "1.5rem",
              marginLeft: "10rem",
            }}
          />
          <Typography
            sx={{
              color: "rgba(241, 234, 234, 0.86)",
              fontWeight: "bold",
              fontSize: 75,
              marginBottom: "2rem",
              marginLeft: "6rem",
              position: "absolute",
              textShadow:
                "0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0, 0, 0, 0.9)",
            }}
          >
            {t("home.name")}
          </Typography>
          <div
            style={{
              color: "hsla(187, 90.30%, 51.40%, 0.76)",
              display: "flex",
              fontSize: 40,
              fontWeight: "bold",
              justifyContent: "flex-start",
              textAlign: "left",
              marginTop: "10rem",
              width: "80%",
            }}
          >
            <div
              style={{
                color: "hsl(192, 33.30%, 97.10%)",
                marginRight: "1rem",
              }}
            >
              {t("home.type.IAm")}
            </div>
            <Typewriter
              options={{
                strings: [`${t("home.type.1")}`],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};
