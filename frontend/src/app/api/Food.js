import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_FOOD_BACKEND;
const api = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
});

export async function getFoodList(id) {
  const res = await api.get(`/food/detail/${id}`); 
  //console.log(res.data);
  return res.data;
}





