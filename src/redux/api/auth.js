import axios from 'axios';
import {toast} from 'react-toastify'
import { authAction } from '../slice/authslice';

//Login USer الغرض ارسال ريكويست الى السيرفير وعمل لوكين لليوزر
export function loginUser(formData){
    return async(dispatch)=>{
        try {
          dispatch(authAction.login(formData));
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}
/*
const login = async(e)=>{
    e.preventDefault()
    await axios.post('${process.env.REACT_APP_API_URL}/api/auth/login',{
      email:email,
      password:password
    }).then((res)=>{
      console.log(res.data);
      if(res.data.message){
        toast.error(res.data.message)
      }
      if(res.data._id){
        localStorage.setItem('user',JSON.stringify(res.data))
        navigate('/')
      }
    }).catch((err)=>{
      console.log(err);
    })
  }*/

//logout 
export function logoutUser(formData){
  return async(dispatch)=>{
      try {
        dispatch(authAction.login(null));
      } catch (error) {
          toast.error(error.response.data.message)
      }
  }
}