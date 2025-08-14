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

export async function AuthLogin(payload) {
  try {
    const { data } = await api.post('/user/login', payload);
    return data;                // <- this is what you want ("SUCCESS", true, etc.)
  } catch (err) {
    console.error('AuthLogin error:', err.response?.data || err.message);
    throw err;
  }
}
export async function getUserByUsername(username) {
  try {
    const res = await api.get(`/user/details?username=${encodeURIComponent(username)}`);
    console.log(res.id);
    return res;
  } catch (err) {
    console.error('User error:', err.response?.data || err.message);
    throw err;
  }
}

