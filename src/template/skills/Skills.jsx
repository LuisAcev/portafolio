import { Grid2 } from "@mui/material";
import { logosCardArray } from "../../assets/logos";
import { LogosCard } from "./cards/LogosCard";

export const Skills = () => {
  return (
    <Grid2
      container
      rowSpacing={3}
      columnSpacing={{ xs: 6, sm: 2, md: 10, lg: 18 }}
      sx={{
        margin: {
          xs: "9vh 0 0 -1vh",
          sm: "14vh 15vh 0 1vh",
          md: "14vh 0 0 8rem",
          lg: "18vh 2vh 0 7rem",
        },
        gap:{sm:10 ,md:12,lg:12}
      }}
    >
      {logosCardArray.map((item, index) => (
        <LogosCard key={index} img={item.img} alt={item.alt} text={item.text} />
      ))}
    </Grid2>
  );
};
