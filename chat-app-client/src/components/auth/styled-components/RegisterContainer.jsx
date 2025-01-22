import { styled } from "@mui/material";
import { Box } from "@mui/material";

const RegisterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",

  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

export default RegisterContainer;
