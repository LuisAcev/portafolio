import { Avatar, Box, CssBaseline, Typography } from "@mui/material";
import AppTheme from "./components/AppTheme";
import Typewriter from "typewriter-effect";
import { Model } from "./3DModel/Model";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        boxShadow: "inset 0 0 30rem rgba(0, 0, 0, .5)",
        background: "#141E30" /* fallback for old browsers */,
        background:
          "-webkit-linear-gradient(to left, #243B55, #141E30)" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to left, #243B55, #141E30)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
    >
      <AppTheme>
        <CssBaseline enableColorScheme />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              backgroundColor: "hsla(210, 55.70%, 45.10%, 0.3)",
              borderRadius: "100rem",
              boxShadow: "inset 0 0 30rem rgba(0, 0, 0, .5)",
              height: "85vh",
              margin: " 6.5rem 0 0 3rem",
              width: "85vh",
              zIndex: 2,
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
              src="/static/images/avatar/1.jpg"
              sx={{
                width: 300,
                height: 300,
                marginBottom: "2rem",
                marginLeft: "10rem",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                fontWeight: "bold",
                fontSize: 80,
                marginBottom: "2rem",
                marginLeft: "4rem",
              }}
            >
              {t("home.name")}
            </Typography>
            {/* <div
              style={{
                display: "flex",
                fontSize: 40,
                fontWeight: "bold",
                gap: 20,
                marginTop: "11rem",
                padding: "0 0 0 0",
              }}
            > */}
            {/* {t("home.type.IAm")} */}
            <div
              style={{
                color: "hsla(187, 90.30%, 51.40%, 0.76)",
                display: "flex",
                fontSize: 40,
                fontWeight: "bold",
                justifyContent: "flex-start",
                textAlign:"left",
                marginTop: "10rem",
                width: "80%",
              }}
            >
              <div
                style={{
                  color: "hsl(192, 33.30%, 97.10%)",
                  marginRight: "0.5rem",
                }}
              >
                {t("home.type.IAm")}
              </div>
              <Typewriter
                options={{
                  strings: [`${t("home.type.1")} E ${t("home.type.2")}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            {/* </div> */}
          </Box>
        </Box>
      </AppTheme>
    </Box>
  );
};
