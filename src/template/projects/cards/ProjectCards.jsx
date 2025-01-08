import { useState } from "react";
import Card from "@mui/material/Card";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Box, Button, Link, Typography } from "@mui/material";
import { ModalMobil } from "./ModalMobil";

export const ProjectCards = ({
  img,
  text,
  title,
  link,
  repository,
  technologies,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  const handleDetails = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <Box
      sx={{
        display: "flex",
        border: "0.16rem solid rgba(111, 176, 202, 0.71)",
        borderRadius: "0.7rem",
        flexDirection: "column",
        maxHeight: "30vh",
        height: { xs: "13.2vh", md: "25vh", lg: "25vh" },
        width: { xs: "16.5vh", md: "38vh", lg: "38vh" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        {/* tamaño y dimenciones del  componente Card */}

        <Card
          sx={{
            width: { xs: "38vh", md: "40vh", lg: "38vh" },
            height: { xs: "9.5vh", md: "32vh", lg: "32vh" }, //tamaño definido
            maxHeight: { xs: "9.5vh", md: "21vh", lg: "21.4vh" }, // Tamaño que va usar del definico
            borderRadius: "0.6rem",
            backgroundColor: "transparent",
            border: "none",
            zIndex: 1,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.3 }}
            transition={{ type: "spring" }}
            style={{
              Width: "100%",
              height: "100%",
            }}
          >
            <img alt="porjects" src={img} />
          </motion.div>
        </Card>
        <Box
          sx={{
            backgroundColor: "transparent",
            borderRadius: "1.5rem",
            position: "absolute",
            width: "40vh",
            margin: "0.5rem 0 1rem 0",
            height: "3vh",
            zIndex: 2,
          }}
        >
          {/*// data card */}
          {isVisible ? (
            <Box
              sx={{
                background:
                  "linear-gradient(to left,rgba(36, 59, 85, 0.8),rgba(20, 30, 48, 0.8))" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
                borderRadius: "1.5rem",
                display: { sx: "none", ms: "none" },
                margin: "0 2.5vh 0 0.5vh",
                Width: "30vh",
                height: "20vh",
                transition: "1s ",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  backgroundColor: "transparent",
                  color: "hsla(0, 0.00%, 99.20%, 0.92)",
                  fontWeight: "bold",
                  padding: "3hv 0 0 0",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "hsla(0, 0.00%, 99.20%, 0.92)",
                  width: "90%",
                  margin: "1vh 0 9.1rem 0.5rem",
                }}
              >
                {`Landing page: ${t(`projects.${text}`)}`}
                <br />

                {`${t(`projects.technologies`)}: ${technologies}`}
              </Typography>
            </Box>
          ) : null}
        </Box>
      </Box>
      {/* /// buttons Mobil/// */}

      <ModalMobil
        link={link}
        repository={repository}
        text={text}
        title={title}
        technologies={technologies}
      />

      {/* /// buttons web/// */}
      <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          backgroundColor: "hsla(180, 2.10%, 37.30%, 0.40)",
          justifyContent: "center",
          gap: { xs: 1.5, md: 3, lg: 3 },
        }}
      >
        {/* // Details APP */}
        <Button
          onClick={handleDetails}
          sx={{
            color: "hsl(216, 42.90%, 68.40%)",
            fontSize: { md: 18, lg: 18 },
            fontWeight: "bold",
            padding: "0 0 0 0",
            textTransform: "none",
          }}
        >
          {t(`card.details`)}
        </Button>
        {/* // web site */}
        <Link
          variant="h6"
          underline="hover"
          href={link}
          sx={{
            color: "hsl(216, 42.90%, 68.40%)",
            fontWeight: "bold",
            fontSize: { md: 18, lg: 18 },
          }}
        >
          {" "}
          {t(`card.link`)}
        </Link>

        {/* // repository */}
        <Link
          variant="h6"
          underline="hover"
          href={repository}
          sx={{
            color: "hsl(216, 42.90%, 68.40%)",
            fontWeight: "bold",
            fontSize: { md: 18, lg: 18 },
          }}
        >
          {" "}
          {t(`card.repository`)}
        </Link>
      </Box>
    </Box>
  );
};
