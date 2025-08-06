import axios from "axios";


const baseURL = process.env.NEXT_PUBLIC_USER_BACKEND;
const api = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
});

export async function createUser(formData){
    const res = api.post('/user/create',formData);
    console.log(res);
}


