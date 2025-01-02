
import { Grid2 } from "@mui/material";
import { logosCardArray } from "../../assets/logos";
import { LogosCard } from "./cards/LogosCard";

export const Skills = () => {
  return (
    <Grid2 container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 10, lg:20 }} sx={{margin:"0 0 0 8rem"}}>
      {logosCardArray.map((item, index) => (
        <LogosCard key={index} img={item.img} alt={item.alt} text={item.text} />
      ))}
    </Grid2>
  );
};
