import { useState } from "react";
import Card from "@mui/material/Card";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Box, Button, Link, Typography } from "@mui/material";

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
        flexDirection: "column",
        maxWidth: "40vh",
        border: "0.16rem solid rgba(111, 176, 202, 0.71)",
        borderRadius: "0.7rem",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Card
          sx={{
            maxWidth: "40vh",
            height: "32vh",
            borderRadius: "0.6rem",
            backgroundColor: "transparent",
            border: "none",
            zIndex: 1,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
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
                margin: "0.6rem 0 0.45rem 0.6rem",
                height: "28vh",
                width: "38vh",
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
                  padding: "1.5rem 0 0 0",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "hsla(0, 0.00%, 99.20%, 0.92)",
                  width: "85%",
                  margin: "1.5rem 0 9.1rem 0.5rem",
                }}
              >
                {`Landing page: ${t(`projects.${text}`)}`}
                <br />
                <br />
                {`${t(`projects.technologies`)}: ${technologies}`}
              </Typography>
            </Box>
          ) : null}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "hsla(180, 2.10%, 37.30%, 0.40)",
          justifyContent: "center",
          gap: 3,
          width: " vh",
        }}
      >
        {/* // Details APP */}
        <Button
          onClick={handleDetails}
          sx={{
            color: "hsl(216, 42.90%, 68.40%)",
            fontSize: 20,
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
          sx={{ color: "hsl(216, 42.90%, 68.40%)", fontWeight: "bold" }}
        >
          {" "}
          {t(`card.link`)}
        </Link>

        {/* // repository */}
        <Link
          variant="h6"
          underline="hover"
          href={repository}
          sx={{ color: "hsl(216, 42.90%, 68.40%)", fontWeight: "bold" }}
        >
          {" "}
          {t(`card.repository`)}
        </Link>
      </Box>
    </Box>
  );
};
