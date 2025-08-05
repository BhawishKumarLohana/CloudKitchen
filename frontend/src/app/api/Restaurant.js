import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_RESTAURANT_BACKEND;

if (!baseURL) {
  // This makes the problem obvious at startup
  throw new Error("Missing NEXT_PUBLIC_RESTAURANT_BACKEND in .env.local");
}

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

console.log("API baseURL:", api.defaults.baseURL);

export async function getAllRestaurants() {
  try {
    const res = await api.get("/restaurant/all");
    console.log(res.data);
    return res;
  } catch (err) {
    console.error("Error fetching restaurants:", err);
    throw err;
  }
}
