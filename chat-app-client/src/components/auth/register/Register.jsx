import { useState } from "react";
import RegisterContainer from "../styled-components/RegisterContainer";
import RegisterForm from "../styled-components/RegisterForm";
import FormInput from "../styled-components/FormInput";
import RegisterButton from "../styled-components/RegisterButton";
import { register } from "../../../redux/auth/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { name, email, username, password } = formData;

  const { isLoading, error, errorMessage, success, successMessage } =
    useSelector((state) => state.auth);
  // const newState = useSelector(state => state.auth)
  // console.log(newState)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !username || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await register(formData, dispatch);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(success,successMessage)

  return (
    <RegisterContainer>
      {success && <p style={{ color: "green" }}>{successMessage}</p>}
      <RegisterForm>
        <h1 style={{ fontFamily: "sans-serif" }}>Register</h1>
        <FormInput
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
        />
        <FormInput
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          placeholder="Email"
        />
        <FormInput
          onChange={handleChange}
          type="text"
          name="username"
          value={username}
          placeholder="Username"
        />
        <FormInput
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
        />
        {isLoading ? <CircularProgress color="success" />:
        <RegisterButton onClick={onSubmitHandler}>Register</RegisterButton>}
        {error && <p style={{ color: "red" }}>{errorMessage}</p>}
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
