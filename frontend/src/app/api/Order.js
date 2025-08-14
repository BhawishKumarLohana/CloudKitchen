import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_ORDER_BACKEND;
const api = axios.create({
    baseURL,
    headers:{"Content-Type":"application/json"}
});

export async function addOrder(orderDetails){

    const res = api.post(`/order/addorder`,orderDetails,{
         headers: { "Content-Type": "application/json" },
    });

    console.log(res);

    return res;

}