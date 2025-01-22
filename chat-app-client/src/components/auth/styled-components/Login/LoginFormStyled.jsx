import { Box } from "@mui/material";
import styled from "styled-components";
const LoginFormStyled = styled(Box)(()=>({
    padding:'20px',
    display:'flex',
    flexDirection:'column',
    gap:'20px',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'10px',
    width:'300px',
    boxShadow:'20px 20px 50px rgba(0, 0, 0, 0.5)',
}))


export default LoginFormStyled