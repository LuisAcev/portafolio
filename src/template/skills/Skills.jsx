import { Box } from "@mui/material";
import { logosCardArray } from "../../assets/logos";
import { LogosCard } from "./cards/LogosCard";

export const Skills = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(3, auto)",
          md: "repeat(4, auto)",
          lg: "repeat(5, auto)",
        },
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        columnGap: { xs: 2, sm: 4, md: 8, lg: 12 },
        rowGap: { xs: 2, sm: 3, md: 4, lg: 5 },
        margin: {
          xs: "9.5vh 0 0 -3.5vh",
          sm: "14vh 0 0 0",
          md: "12vh 4rem 0 -2.5rem",
          lg: "12vh 8rem 0 4rem",
        },
      }}
    >
      {logosCardArray.map((item, index) => (
        <LogosCard key={index} img={item.img} alt={item.alt} text={item.text} />
      ))}
    </Box>
  );
};