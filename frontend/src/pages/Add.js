import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import { Theme } from "../assets/theme";

const CssTextField = styled(TextField)({
  label: {
    color: "#fff",
  },
  "&.MuiTextField-root": {
    backgroundColor: "#165C3F",
  },
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": {
      borderColor: "#000",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
});

export default function Add() {
  const location = useLocation();
  let img = location.state || null;
  return (
    <Theme>
      <svg
        className="w-7 absolute inset-0 mt-10 ml-5"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
      <div className="w-full h-[100vh] flex justify-center items-center flex-col bg-[#13724A] gap-5">
        {img ? (
          <img
            src={img.img}
            className="w-80 border-2 border-[#000] rounded-lg mb-7"
            alt=""
          />
        ) : (
          <Link
            to="/cam"
            className="w-80 h-80 bg-slate-500 rounded-lg flex items-center justify-center text-2xl"
          >
            ADD +
          </Link>
        )}
        <CssTextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          sx={{
            width: "80%",
          }}
        />
        <CssTextField
          id="outlined-basic"
          label="Problem Faced"
          variant="outlined"
          multiline
          minRows={3}
          sx={{
            width: "80%",
          }}
        />
        <div className="flex flex-col justify-center items-center mt-7">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "custom.main",
              color: "custom.contrastText",
              width: { mobile: "112.5%", tablet: "40%", laptop: "40%" },
            }}
          >
            Report Pothole
          </Button>
          <Typography
            variant="h6"
            color="primary.contrastText"
            sx={{
              fontStyle: "italic",
              fontSize: "0.65rem",
              textAlign: "center",
              textShadow: "0px 5px 4px rgba(0, 0, 0, 0.36)",
              mt: 2,
            }}
          >
            "I Confirm that the Image Provided is not Misleading"
          </Typography>
        </div>
      </div>
    </Theme>
  );
}
