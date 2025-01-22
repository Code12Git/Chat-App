import styled from "styled-components";
import { Box } from "@mui/material";

const RegisterForm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.2); 
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 420px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 600px) {
    padding: 25px;
    gap: 15px;
  }
`;

export default RegisterForm;
