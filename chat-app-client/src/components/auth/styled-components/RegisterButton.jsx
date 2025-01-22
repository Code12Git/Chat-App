import { Button } from "@mui/material";
import styled from "styled-components";

const RegisterButton = styled(Button)(() => ({
  backgroundColor: "#007bff",
  color: "white",
  padding: "12px 20px",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  
  cursor: "pointer",
  transition: "background-color 0.3s ease-in-out",

  "&:hover": {
    backgroundColor: "#0056b3",
  },
}));

export default RegisterButton;
