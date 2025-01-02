import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function SocialMedias() {
  return (
    <Stack
      direction="row"
      spacing={2}
      useFlexGap
      sx={{ justifyContent: "left", color: "text.secondary" }}
    >
      <IconButton
        color="inherit"
        size="large"
        href="https://github.com/LuisAcev?tab=repositories"
        aria-label="GitHub"
        title="GitHub"
        sx={{
          alignSelf: "center",
          backgroundColor: "hsla(211, 17.40%, 51.60%, 0.90)",
          border:" 0.3rem solid hsla(211, 77.50%, 15.70%, 0.80)", 
          width: 55,
          height: 55,
          transition: "background-color 0.3s", // Animación suave
            "&:hover": {
             backgroundColor: "hsla(187, 91.40%, 41.20%, 0.70)",
            },
        }}
      >
        <FacebookIcon />
      </IconButton>

      <IconButton
        color="inherit"
        size="large"
        href="https://www.linkedin.com/in/luisfelipevigoya/"
        aria-label="LinkedIn"
        title="LinkedIn"
        sx={{
          alignSelf: "center",
          backgroundColor: "hsla(211, 17.40%, 51.60%, 0.90)",
          border:" 0.3rem solid hsla(211, 77.50%, 15.70%, 0.80)", 
          width: 54,
          height: 54,
          transition: "background-color 0.3s", // Animación suave
            "&:hover": {
              backgroundColor: "hsla(187, 91.40%, 41.20%, 0.70)",
            },
        }}
      >
        <LinkedInIcon />
      </IconButton>
    </Stack>
  );
}
