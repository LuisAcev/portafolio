import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      msg: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const url =
        "https://script.google.com/macros/s/AKfycbwUdqwc3qEFTU-P7iuYk1JAccwqaZv52EVlkUW0BQM1JvhGllgayVeqUrGsetyao7aJWA/exec";

      const response = await fetch(url, {
        method: "POST",
        body: new URLSearchParams({
          fullname: data.fullname,
          email: data.email,
          msg: data.msg,
        }),
         mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',}
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        backgroundColor: "hsla(220, 47.40%, 14.90%, 0.40)",
        border: " 0.2rem solid hsla(211, 17.40%, 51.60%, 0.50)",
        borderRadius: "0.8rem",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "3rem 2rem 2rem 2rem",
        margin: "3rem 0 0 20rem",
        width: "100vh",
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
            style: {
              color: "hsla(0, 0.00%, 100.00%, 0.8)",
              height: "auto",
              paddingBottom: "80px",
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
      <Button
        type="submit"
        sx={{
          border: "0.2rem solid rgba(138, 174, 189, 0.8)",
          borderRadius: "1.5rem",
          color: "rgba(255, 255, 255, 0.73)",
          margin: "0 0 0 23rem",
          width: "16vh",
          transition: "background-color 0.3s", // Animación suave
            "&:hover": {
              backgroundColor: "hsla(187, 91.40%, 41.20%, 0.60)",
            },
        }}
      >
        {t("contact.submit")}
      </Button>
    </form>
  );
};
