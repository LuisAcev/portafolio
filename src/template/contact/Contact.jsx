import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      msg: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const url = import.meta.env.VITE_API_URL;

      const response = await fetch(url, {
        method: "POST",
        body: new URLSearchParams({
          fullname: data.fullname,
          email: data.email,
          msg: data.msg,
        }),
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      reset();
      if (response.ok) {
        const result = await response.text(); // Cuerpo de la respuesta
        console.log(t("contact.fethcMsg.success"), result);
      } else {
        console.error(t("contact.fethcMsg.error"));
      }
    } catch (error) {
      console.error(t("contact.fethcMsg.errorsubmit"), error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: {
            xs: "14vh 0 2vh 0 ",
            md: "1vh 0 0 0",
            lg: "1vh 0 0 0",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "hsla(220, 47.40%, 14.90%, 0.40)",
            border: " 0.2rem solid hsla(211, 17.40%, 51.60%, 0.50)",
            borderRadius: "0.8rem",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            gap: 2,
            padding: {
              xs: "1.5rem 0.5rem 1rem 0.5rem",
              md: "3rem 2rem 2rem 2rem",
              lg: "3rem 2rem 2rem 2rem",
            },
            margin: {
              xs: "-2vh 1vh 0 -2.5vh",
              sm: "2vh 15vh 0 1vh",
              md: "14vh 18vh 0 4vh",
              lg: "14vh 24vh 0 4vh",
            },
          }}
        >
          {/* // full name */}
          <TextField
            name="fullname"
            required
            id="outlined-required"
            label={t("contact.fullname")}
            variant="filled"
            slotProps={{
              input: { style: { color: "hsla(0, 0.00%, 100.00%, 0.8)" } },
            }}
            sx={{
              backgroundColor: "hsla(211, 17.00%, 44.90%, 0.40)",
              borderRadius: "0.5rem",
              "& .MuiFilledInput-root": {
                "&:after": {
                  borderBottom: "2px solid rgba(138, 174, 189, 0.6)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.4)",
                "&.Mui-focused": {
                  color: "rgba(255, 255, 255, 0.4)",
                },
              },
            }}
            {...register("fullname")}
          />

          {/* //email */}
          <TextField
            name="email"
            required
            type="email"
            id="outlined-required"
            label={t("contact.email")}
            variant="filled"
            slotProps={{
              input: { style: { color: "hsla(0, 0.00%, 100.00%, 0.8)" } },
            }}
            sx={{
              backgroundColor: "hsla(211, 17.00%, 44.90%, 0.40)",
              borderRadius: "0.5rem",
              "& .MuiFilledInput-root": {
                "&:after": {
                  borderBottom: "2px solid rgba(138, 174, 189, 0.6)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.4)",
                "&.Mui-focused": {
                  color: "rgba(255, 255, 255, 0.4)",
                },
              },
            }}
            {...register("email")}
          />
          {/* //mensaje */}
          <TextField
            name="msg"
            required
            id="outlined-required"
            label={t("contact.message")}
            multiline={true}
            variant="filled"
            rows={12}
            slotProps={{
              input: {
                sx: {
                  color: "hsla(0, 0.00%, 100.00%, 0.8)",
                  height: "auto",
                  paddingBottom: {
                    xs: "100px",
                    sm: "80px",
                    md: "80px",
                    lg: "70px",
                  },
                },
              },
            }}
            sx={{
              backgroundColor: "hsla(211, 17.00%, 44.90%, 0.40)",
              borderRadius: "0.5rem",
              "& .MuiFilledInput-root": {
                "&:after": {
                  borderBottom: "2px solid rgba(138, 174, 189, 0.6)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.4)",
                "&.Mui-focused": {
                  color: "rgba(255, 255, 255, 0.4)",
                },
              },
            }}
            {...register("msg")}
          />
          <Box sx={{ textAlign: "center" }}>
            <Button
              type="submit"
              sx={{
                border: "0.2rem solid rgba(138, 174, 189, 0.8)",
                borderRadius: "1.5rem",
                color: "rgba(255, 255, 255, 0.73)",
                width: "20vh",
                transition: "background-color 0.3s", // Animación suave
                "&:hover": {
                  backgroundColor: "hsla(187, 91.40%, 41.20%, 0.60)",
                },
              }}
            >
              {t("contact.submit")}
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
