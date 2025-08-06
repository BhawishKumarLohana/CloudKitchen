"use client"
import Image from "next/image";
import navbar from "./components/navbar";
import FoodCard from "./components/FoodCard";
import { getAllRestaurants,createRestaurant, uploadImage } from "./api/Restaurant";
import { useState,useEffect } from "react";

export default function Home() {

  const [Restaurants,setRestaurants] = useState([]);
  const [createRestModal,setcreateRestModal] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  address: "",
  city: "",
  description: "",
  rating: "4",
  imageUrl:""
  
  
});

async function uploadFile(file) {
  try {
    const result = await uploadImage(file);
    console.log("Upload successful:", result);
    // Optional: update state with result.url if your API returns the image URL
  } catch (err) {
    console.error("Upload failed:", err);
  }
}


  let modalContent = null;
  useEffect(()=>{
    async function fetchRestarants (){
      const data  = await getAllRestaurants();
      console.log("data" +data.data[0].name); // does give me answer
      setRestaurants(data.data);
      console.log("Res: " + Restaurants)

    }
    fetchRestarants();
  },[])

  if(createRestModal){
    modalContent = (
      <div className=" items-center justify-center max-w-3xl max-h-1/2 border-dashed border-black bg-white">
        <h2 className="text-back text-2xl">Create Restaurant</h2>
        <form className="grid grid-cols-1 px-10 py-10 gap-2" onSubmit={() => {setcreateRestModal(false);console.log(formData)} }>
          <div
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              console.log(file);
              
            }}
            onDragOver={(e) => e.preventDefault()}
            className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer"
          >
            Drag & Drop your image here  
            <br />
            <input
              type="file"
              accept="image/*"
              className="mt-2"
              onChange={(e) => {
                const file = e.target.files[0];
                console.log("Storing "+file);
                uploadFile(file);


              }}
            />
          </div>
          <label className="">Name</label>
          <input placeholder="Name" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}></input>
          <label className="">Description</label>
          <input placeholder="Description" value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})}></input>
          <label className="">Address</label>
          <input placeholder="Address" value={formData.address} onChange={(e)=>setFormData({...formData,address:e.target.value})}></input>
          <label className="">City</label>
          <input placeholder="City" value={formData.city} onChange={(e)=>setFormData({...formData,city:e.target.value})}></input>
          
        </form>
        <div className="flex w-full px-5 py-5 justify-end-safe">
          <button className="border-2 border-black rounded-2xl text-sm py-2 px-5 w-1/4 " onClick={async ()=>{await createRestaurant(formData)}}>Create</button>
          <button className="border-2 border-black rounded-2xl text-sm py-2 px-5 w-1/4 " onClick={()=>{setcreateRestModal(false);setFormData({ name: "",description: "",address: "",city: ""})}}>Close</button>
          </div>
      </div>
    );
  }
 


  
  return (
   <>
      <div className="bg-white font-black text-center px-10 py-10 ">
      {createRestModal ? (
          <div className="max-w-full max-h-full items-center justify-center flex ">
      {modalContent}
      </div>

      ):(
        <>
      
        <h1 className="text-2xl">Restaurants</h1>
        <button className="border-1 rounded-2xl hover:bg-green-300 text-xl" onClick={()=>{setcreateRestModal(true);}}>Create</button>

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
        
            </>
        )}
      </div>
    
      
    </>
    
    
  ); 
}
