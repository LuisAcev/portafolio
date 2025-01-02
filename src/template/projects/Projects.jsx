import { Grid2 } from "@mui/material";
import { ProjectCards } from "./cards/projectCards";
import { porjects } from "../../assets/projects.js";

export const Projects = () => {
  return (
    <Grid2 container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
