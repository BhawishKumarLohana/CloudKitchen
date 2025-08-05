"use client"
import Image from "next/image";
import navbar from "./components/navbar";
import FoodCard from "./components/FoodCard";
import { getAllRestaurants } from "./api/Restaurant";
import { useState,useEffect } from "react";
export default function Home() {

  const [Restaurants,setRestaurants] = useState([]);

  useEffect(()=>{
    async function fetchRestarants (){
      const data  = await getAllRestaurants();
      console.log("data" +data.data[0].name); // does give me answer
      setRestaurants(data.data);
      console.log("Res: " + Restaurants)

    }
    fetchRestarants();
  },[])


  
  return (
   <>
      <div className="bg-white font-black text-center px-10 py-10">
        <h1 className="text-2xl">Restaurants</h1>

        <div className="grid grid-cols-4 gap-4 px-10 py-10">
          {Restaurants.map((restaurant) => (
            <FoodCard
              key={restaurant.id ?? restaurant.name}
              name={restaurant.name || ""}
              description={restaurant.description || ""}
              address={restaurant.address || ""}
              city={restaurant.city || ""}
              rating={restaurant.rating || 0}
              link={restaurant.imageUrl || ""}
            />
          ))}
        </div>
      </div>
    </>
    
  );
}
