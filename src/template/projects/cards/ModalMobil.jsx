import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "#fff",
  transform: "translate(-50%, -50%)",
  width: 330,
  backgroundColor: "hsla(209, 66.30%, 37.30%, 0.70)",
  border: "2px solid #000",
  borderRadius: "1.8rem",
  boxShadow: 30,
  p: 4,
};

export const ModalMobil = ({ link, repository, text, title, technologies }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  return (
    <Box sx={{ display: { md: "none", lg: "none" } }}>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: "hsla(180, 2.10%, 37.30%, 0.40)",
          color: "hsl(216, 42.90%, 68.40%)",
          fontSize: 16,
          fontWeight: "bold",
          width:"100%"
        }}
      >
        {t(`card.details`)}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            align="center"
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "hsl(204, 84.80%, 63.90%)",
            }}
          >
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 17 }}>
            {`Landing page: ${t(`projects.${text}`)}`}
            <br />
            <br />
            {`${t(`projects.technologies`)}: ${technologies}`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 5,
              width: " vh",
              margin: "2vh 0 0 0",
            }}
          >
            {/* // Details APP */}

            {/* // web site */}
            <Link
              variant="h6"
              underline="hover"
              href={link}
              sx={{
                borderBottom: "2px solid hsla(204, 85.20%, 60.20%, 0.88)",
                color: "hsla(204, 85.20%, 60.20%, 0.88)",
                fontWeight: "bold",
                fontSize: 24,
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
                borderBottom: "2px solid hsla(204, 85.20%, 60.20%, 0.88)",
                color: "hsla(204, 85.20%, 60.20%, 0.88)",
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              {" "}
              {t(`card.repository`)}
            </Link>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
