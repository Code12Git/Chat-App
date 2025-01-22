import { Input } from "@mui/material";
import styled from "styled-components";

const FormInput = styled(Input)(() => ({
  height: "50px",
  padding: "10px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  transition: "border-color 0.3s ease-in-out",
}));

export default FormInput;
