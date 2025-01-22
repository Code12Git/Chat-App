import { useState } from "react";
import FormInput from "../styled-components/FormInput";
import LoginButton from "../styled-components/Login/LoginButton";
import LoginContainer from "../styled-components/Login/LoginContainer";
import LoginFormStyled from "../styled-components/Login/LoginFormStyled";
import {useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/auth/actions";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const {isLoading,error,errorMessage,success,successMessage} = useSelector(state => state.auth)

  const dispatch = useDispatch();


  const loginChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const LoginSubmitHandler = async(e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
        return alert('Please fill all the fields')
    }
    try{
        login(formData,dispatch)
    }catch(err){
        console.log(err)
    }
  };
console.log(successMessage)


  return (
    <LoginContainer>
      <LoginFormStyled>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        {success && <p style={{color:"green"}}>{successMessage}</p>}
        <FormInput
          onChange={loginChangeHandler}
          name='email'
          value={formData.email}
          type="text"
          placeholder="Email"
        />
        <FormInput
          onChange={loginChangeHandler}
          name="password"
          value={formData.password}
          type="password"
          placeholder="Password"
        />
       {!isLoading ? <LoginButton onClick={LoginSubmitHandler} type="submit">
          Login
        </LoginButton> : <LoginButton disabled>Loading...</LoginButton>}
        {error && <p style={{color:"red"}}>{errorMessage}</p>}
      </LoginFormStyled>
    </LoginContainer>
  );
};

export default Login;
