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

export async function createRestaurant(formData) {
  try {
    console.log(formData.description);
    console.log(formData.name);
    const res = await api.post("/restaurant/create", formData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.data);
  } catch (err) {
    console.error("Error creating restaurant", err);
  }
}

export async function uploadImage(file) {
  try {
    const formData = new FormData();
    formData.append("image", file); // "file" = field name expected by backend

    const res = await api.post("/cloud/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" }, // Axios sets it automatically
    });
    console.log("URL::"+res.secure_url);
    //return res.secure_url;

    console.log("Image uploaded:", res.data);
    return res.data; // often contains the image URL
  } catch (err) {
    console.error("Error uploading image", err);
    throw err;
  }
}

