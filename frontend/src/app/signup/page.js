"use client"
import  { useState } from 'react'
import { createUser } from '../api/User';
function signup() {

    const [formData,setFormData] = useState({
        username: "",
        address: "", 
        city:"",
        password:""
    });

    const sendNewUserRequest = async (formData)=>{
        const req = await createUser(formData);
        alert("Success");
        setFormData({
        username: "",
        address: "", 
        city:"",
        password:""
    });
    }

    const formSubmit= async (e) =>{
        e.preventDefault(); 
        console.log("SUBMIT"+formData.username,formData.address,formData.city,formData.password);
        sendNewUserRequest(formData);
    }

  return (
    <div className='max-w-1/2 max-h-1/2 bg flex-white items-center'>
        <form className='grid grid-cols-1 py-10 px-10 border-black border-2 mt-40 ml-96' onSubmit={formSubmit}> 
            <label>Username</label>
            <input placeholder='username' onChange={(e) => {setFormData({...formData,username:e.target.value})}}></input>

            <label>Address</label>
            <input placeholder='Address' onChange={(e) => {setFormData({...formData,address:e.target.value})}}></input>


            <label>City</label>
            <input placeholder='City' onChange={(e) => {setFormData({...formData,city:e.target.value})}}></input>

            <label>Password</label>
            <input placeholder='Password' onChange={(e) => {setFormData({...formData,password:e.target.value})}}></input>


            <button className='bg-grey rounded-2xl border-black border-2 hover:bg-emerald-50' type='submit' >Submit</button>


            


        </form>


    </div>
  )
}

export default signup