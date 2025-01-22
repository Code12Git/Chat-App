import styled from "styled-components";
import { Button } from "@mui/material";

const LoginButton = styled(Button)(() => ({
    height: "50px",
    width: "100%",
    borderRadius: "8px",
    backgroundColor: "#3f51b5",
    color: "#fff",
    fontSize: "16px",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
        backgroundColor: "#303f9f",
    },
}));

export default LoginButton;