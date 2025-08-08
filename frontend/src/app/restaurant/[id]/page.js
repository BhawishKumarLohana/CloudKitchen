"use client"
import { getFoodList } from '@/app/api/Food';
import { useState } from 'react';
import React, { useEffect } from 'react'
import { use } from 'react';

function RestaurantById({params}) {
  const {id} =use(params);
    //console.log("id"+id);
    const [Food,setFoodList] = useState([]);
    const [thisItem,setThisItem] = useState(0); //  by id


  const getRestaurantById = async (id) => {
    try {
      const data = await getFoodList(id);
      console.log("DATA:", data.foodItemList);
      setFoodList(data.foodItemList);
    } catch (error) {
      console.error("Failed to fetch food list", error);
    }
};
  const addItem = (item) =>{
    if(item.quantity>0){
      item.quantity = item.quantity -1;
      console.log("Item is added!");
    }else{
      alert("No more available!");
    }
    
    


  }

  useEffect(() => {
    if (id) {
      getRestaurantById(id);
    }
  }, [id]);


   return (
    <div>
    <div>RestaurantById</div>
    <div className="grid gap-4">
        {Food.map((item, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{item.itemName}</h2>
            <p className="text-sm text-gray-700">{item.itemDescription}</p>
            <p className="text-green-600 font-bold">Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            {item.ingedrients && (
              <ul className="list-disc list-inside text-sm text-gray-600">
                {item.ingedrients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            )}
            <button  onClick={()=>addItem(item)} className='bg-white text-2xl rounded-2xl border-black border-2 hover:bg-emerald-50'>Add</button>
          </div>
          
        ))}
      </div>
    
    </div>
    
  )
}

export default RestaurantById