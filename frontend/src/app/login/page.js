"use client"
import  { useState } from 'react'
import { AuthLogin } from '../api/User';
import { useRouter } from "next/navigation";
import { useAuth } from '../providers/Auth';
function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [err, setErr] = useState("");


    const [formData,setFormData] = useState({
        username:"",
        password:""
    }); 
    const loginRequest = async (e) => {
        e.preventDefault();
        setErr("");
        try{
          const result = await AuthLogin(formData);
          console.log('result:', result);
          const username = result?.username || formData.username;
          login({username});
          router.push("/");

        }catch(e){
          setErr("Login Failed");
        }
        
        
          
};

  return (
    <div className='max-w-3/4 max-h-max '>
        <form className='grid grid-cols-1' onSubmit={loginRequest}>

            <label>Username</label>
            <input placeholder='Username' onChange={(e)=>{setFormData({...formData,username:e.target.value})}} ></input>

             <label>Password</label>
            <input placeholder='Password' onChange={(e)=>{setFormData({...formData,password:e.target.value})}} ></input>

            <button type='submit' className='rounded-2xl border-2 border-black'>Submit</button>

        </form>



    </div>
  )
}

export default Login