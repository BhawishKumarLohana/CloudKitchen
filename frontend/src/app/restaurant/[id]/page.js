"use client";
import { getFoodList } from "@/app/api/Food";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RestaurantById() {
  const router = useRouter();
  const { id } = useParams();

  const [food, setFoodList] = useState([]);
  const [restaurant,setRestaurant] = useState({});
  const [cart, setCart] = useState({}); // { [id]: { id, itemName, price, qty } }
  const [newItemModal,setNewItemModal]  = useState(false);
  const [formData, setFormData] = useState({
    itemName: "",
    itemDescription: "",
    Ingedrients: [],
    price: 0,
    id: null,
    quantity: 0
  });



const getRestaurantById = async (rid) => {
  try {
    const data = await getFoodList(rid);
    setRestaurant(data.restaurant ||{});
    setFormData({...formData,id:restaurant.id});
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
        price: clickedItem.price,
        qty: 0,
      };
      return {
        ...prev,
        [clickedItem.id]: { ...existing, qty: existing.qty + 1 },
      };
    });
  };

  useEffect(() => {
    if (id) getRestaurantById(id);
  }, [id,restaurant]);

  const goToOrder = () => {
    const items = Object.values(cart); // [{id,itemName,price,qty}]
    sessionStorage.setItem(
      "cart",
      JSON.stringify({ restaurantId: id, items })
    );
    router.push("/order");
  };
  const AddNewItemByRes = async (e) =>{
     e.preventDefault();
      console.log("Restaurant ID:", formData.restaurantId);
    console.log("Item Name:", formData.itemName);
    console.log("Item Description:", formData.itemDescription);
    console.log("Ingredients:", formData.Ingedrients);
    console.log("Price:", formData.price);
    console.log("Quantity:", formData.quantity);
    
  }

  return (
   <div>
  {/* Restaurant name */}
  <h1>{restaurant?.name || "Loading..."}</h1>

  {newItemModal ? (
    // New Item modal content
    <>
    <form onSubmit={AddNewItemByRes}>
  <div className="grid grid-cols-1 rounded-2xl border-black border-2 p-4 gap-2">
    
    <label>Item Name</label>
    <input
      placeholder="Item Name"
      name="itemName"
      onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
    />

    <label>Item Description</label>
    <input
      placeholder="Item Description"
      name="itemDescription"
      onChange={(e) => setFormData({ ...formData, itemDescription: e.target.value })}
    />

    <label>Ingredients (comma separated)</label>
    <input
      placeholder="Tomatoes, Mozzarella, Basil"
      name="ingredients"
      onChange={(e) =>
        setFormData({
          ...formData,
          Ingedrients: e.target.value.split(",").map(i => i.trim())
        })
      }
    />

    <label>Price</label>
    <input
      type="number"
      placeholder="Price"
      name="price"
      step="0.01"
      onChange={(e) =>
        setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })
      }
    />

    <label>Quantity</label>
    <input
      type="number"
      placeholder="Quantity"
      name="quantity"
      onChange={(e) =>
        setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })
      }
    />

    <button
      className="rounded-2xl border-2 border-black px-4 py-2 mt-2 hover:bg-emerald-50"
      type="submit"
    >
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
