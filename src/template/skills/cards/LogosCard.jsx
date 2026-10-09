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
        width: { xs: 105, md: 180, lg: 180 },
        height: { md: 165, lg: 180 },
        transform: { xs: "scale(1)", md: "scale(1)", lg: "scale(1)" },
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}
        transition={{ type: "spring" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "100%",
          height: "100%",
          padding: "8px",
          boxSizing: "border-box",
        }}
      >
        <img
          src={img}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </motion.div>

      {/* Dimensiones de la tarjeta del logo  */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          style={{
            position: "absolute",
            top: "90%",
            left: "11%",
            transform: "translate(-50%, -50%)",
            background: "rgba(129, 140, 143, 0.7)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          {text}
        </motion.div>
      )}
    </Box>
  );
};
