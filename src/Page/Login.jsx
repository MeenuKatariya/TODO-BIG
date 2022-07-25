import React from 'react'
import axios from 'axios'
import { LoginError, LoginLoading, LoginSuccess } from '../Store/Auth/Action'
import { useDispatch,useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Center, Heading, Input, TagLabel, Text } from '@chakra-ui/react'
const initialState={
  Username: "",
  Password: "",

 
}

export const Login = () => {
  const [loginData,setLoginData]=React.useState(initialState)
  const {password,username}=loginData
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const token=useSelector(state=>state.token)
  // console.log(token)

  // const arr=Object.keys(signupData)
  // console.log(arr)
  
  

  const handleChange=(el)=>{
    const {name,value}=el.target;
    setLoginData(prev=>({...prev,[name]: value}))
  }


 
   

  
   
  const handleLogin=()=>{
    let isValid=true;
    Object.values(loginData).forEach(el=>{
      if(!el)
      {
        isValid=false
      }
    })
    if(!isValid)
    {
      alert("Please fill all the values")
    }
    dispatch(LoginLoading())
    axios({
      method:"post",
      url:"https://masai-api-mocker.herokuapp.com/auth/login",
      data:loginData
    }).then(res=>{
      console.log(res.data.token)
      dispatch(LoginSuccess(res.data.token))
     navigate("/")

    

   })
    .catch(res=>{
    //   console.log("error")
    dispatch(LoginError())

    })
  }
  

 
 

      
  return (
    <Center>
      <Box>

      <Heading  marginLeft={20}   paddingBottom={10}  color={"red"}>Login</Heading>
        <h1></h1>
      {
        Object.keys(loginData).map((el)=>{
          return(
            <div>
               <Box>
                <label>{el} </label> <Input type="text"  key={el} placeholder={el}  name={el} value={loginData[el]} onChange={handleChange}/> 
             </Box>

            </div>
          )})}
          <br />
          <Button marginLeft={20} onClick={handleLogin}>
            Login
          </Button>


              </Box>
        
      
    </Center>
  )
}
