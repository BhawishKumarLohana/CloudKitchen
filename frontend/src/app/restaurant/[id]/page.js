"use client";
import { addFoodItem, getFoodList } from "@/app/api/Food";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RestaurantById() {
  const router = useRouter();
  const { id } = useParams();

  const [food, setFoodList] = useState([]);
  const [restaurant,setRestaurant] = useState({});
  const [cart, setCart] = useState({}); // { [id]: { id, itemName, price, qty } }
  const [newItemModal,setNewItemModal]  = useState(false);
  const [formData,setFormData] = useState({
    id:"",
    restaurantId:"",
    itemName:"",
    itemDescription:"",
    Ingedrients:"",
    price:"",
    quantity:""
  });


const getRestaurantById = async (rid) => {
  try {
    const data = await getFoodList(rid);
    setRestaurant(data.restaurant ||{});
    setFormData(prev => ({ ...prev, restaurantId: data.restaurant?.id }));
    setFoodList(data.foodItemList || []);


  } catch (error) {
    console.error("Failed to fetch food list", error);
  }
};

  const addItem = (clickedItem) => {
    if (clickedItem.quantity <= 0) return;

    // update visible stock
    setFoodList((prev) =>
      prev.map((it) =>
        it.id === clickedItem.id
          ? { ...it, quantity: it.quantity - 1 }
          : it
      )
    );

    // update cart summary
    setCart((prev) => {
      const existing = prev[clickedItem.id] || {
        id: clickedItem.id,
        itemName: clickedItem.itemName,
        itemDescription: clickedItem.itemDescription,
        price: clickedItem.price,
        quantity: 0,
        restaurantId: id,
      };
      return {
        ...prev,
        [clickedItem.id]: { ...existing, quantity: existing.quantity + 1 },
      };
    });
  };

  useEffect(() => {
    if (id) getRestaurantById(id);
  }, [id]);

  const goToOrder = () => {
    const items = Object.values(cart); 
    sessionStorage.setItem(
      "cart",
      JSON.stringify({ restaurantId: id, items })
    );
    router.push("/order");
  };
  const AddNewItemByRes = async (e) =>{
    e.preventDefault();
    const res = await addFoodItem(formData);
    console.log(res.data);

    
    
  }

  return (
   <div>
  {/* Restaurant name */}
  <h1>{restaurant?.name || "Loading..."}</h1>

  {newItemModal ? (
    // New Item modal content
    <>
    <form onSubmit={AddNewItemByRes}>
    <div className="grid grid-cols-1 rounded-2xl border-black border-2">
      <label>ItemName</label>
      <input placeholder="ItemName" onChange={(e)=>{setFormData({...formData,itemName:e.target.value})}}></input>
      <label>itemDescription</label>
      <input placeholder="itemDescription"onChange={(e) => {
        setFormData({
          ...formData,
          Ingedrients: e.target.value.split(",").map(i => i.trim())
        });
      }}
></input>
      <label>Ingredients</label>
      <input placeholder="Ingredients" onChange={(e)=>{setFormData({...formData,Ingedrients: e.target.value})}}></input>
      <label>Price</label>
      <input placeholder="Price" onChange={(e)=>{setFormData({...formData,price: e.target.value})}}></input>
       <label>quantity</label>
      <input placeholder="Quantity" onChange={(e)=>{setFormData({...formData,quantity: e.target.value})}}></input>
      <button className="rounded-2xl border-2 border-black " type="submit">
        Submit

      </button>
      

    </div>
    </form>

    
    
    </>
  ) : (
    <>
      {/* Food list */}
      <div className="grid gap-4">
        {food.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{item.itemName}</h2>
            <p className="text-sm text-gray-700">{item.itemDescription}</p>
            <p className="text-green-600 font-bold">Price: ${item.price}</p>
            <p>In stock: {item.quantity}</p>

            <button
              onClick={() => addItem(item)}
              className="bg-white text-2xl rounded-2xl border-black border-2 hover:bg-emerald-50"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* Cart and actions */}
      <div className="mt-6 flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Items in cart: {Object.values(cart).reduce((n, it) => n + it.qty, 0)}
        </span>
        <button
          className="bg-white text-2xl rounded-2xl border-black border-2 hover:bg-emerald-50 px-4 py-1"
          onClick={goToOrder}
        >
          Order
        </button>
        <button
          className="bg-white text-2xl rounded-2xl border-black border-2 hover:bg-emerald-50 px-4 py-1"
          onClick={() => setNewItemModal(true)}
        >
          ADD New Item
        </button>
      </div>
    </>
  )}
</div>

  );
}
