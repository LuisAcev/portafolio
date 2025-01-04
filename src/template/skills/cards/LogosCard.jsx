import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export const LogosCard = ({ img, alt, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        alignSelf: "center",
        backgroundColor: "transparent",
        padding: " 0 0 0 0",
        width: { xs: 110, md: 180, lg: 180 },
        height: { md: 170, lg: 180 },
        transform: { xs: "scale(1.1)", md: "scale(1.2)", lg: "scale(1.2)" },
      }}
    >
      <motion.div
        id="img"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.3 }}
        transition={{ type: "spring" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          Width: "100%",
          height: "100%",
        }}
      >
        <img id="img" src={img} alt={alt} />
      </motion.div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          style={{
            position: "absolute",
            top: "90%",
            left: "18%",
            transform: "translate(-50%, -50%)",
            background: "rgba(129, 140, 143, 0.7)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {text}
        </motion.div>
      )}
    </Box>
  );
};
