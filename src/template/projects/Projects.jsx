import { Grid2 } from "@mui/material";
import { porjects } from "../../assets/projects.js";
import { ProjectCards } from "./cards/ProjectCards.jsx";

export const Projects = () => {
  return (
    <Grid2
      container
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 5, lg: 5 }}
      sx={{
        margin: {
          xs: "14vh 0 4vh -2vh ",
          ms: "10vh 0 4vh 0 ",
          md: "12vh 0 0 0",
          lg: "12vh 10vh 0 0",
        },
        gap: { xs: 1.8, sm: 2, md: 4, lg: 5 },
      }}
    >
      {porjects.map((item, index) => (
        <ProjectCards
          key={index}
          title={item.title}
          img={item.img}
          text={item.text}
          link={item.link}
          repository={item.repository}
          technologies={item.technologies}
        />
      ))}
    </Grid2>
  );
};
