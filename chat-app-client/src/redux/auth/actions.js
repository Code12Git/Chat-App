import { publicInstance } from "../../helpers/axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";



const register = async (formData, dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
    payload: null,
  });
  try {
    const response = await publicInstance.post("/auth/register", formData);
    console.log(response.data.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload:{
        user: response.data.data,
        successMessage:response.data.message,
      }
    });
    formData = {
      name: "",
      email: "",
      username: "",
      password: "",
    };
  } catch (err) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: err.response.data.code.message,
    });
    console.log(err.response.data.code.message)
  }
};

const login = async(formData,dispatch) => {
  try{
    dispatch({type:LOGIN_REQUEST,payload:null})
    const res = await publicInstance.post('/auth/login',formData)
    dispatch({type:LOGIN_SUCCESS,payload:{user:res.data.data}})
  }catch(err){
   dispatch({type:LOGIN_FAILURE,payload:err.response.data.code.message})
  }
}


export { register , login };
