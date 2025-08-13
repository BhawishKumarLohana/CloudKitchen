"use client";
import { getFoodList } from "@/app/api/Food";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RestaurantById() {
  const router = useRouter();
  const { id } = useParams();

  const [food, setFoodList] = useState([]);
  const [cart, setCart] = useState({}); // { [id]: { id, itemName, price, qty } }

  const getRestaurantById = async (rid) => {
    try {
      const data = await getFoodList(rid);
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
  }, [id]);

  const goToOrder = () => {
    const items = Object.values(cart); // [{id,itemName,price,qty}]
    sessionStorage.setItem(
      "cart",
      JSON.stringify({ restaurantId: id, items })
    );
    router.push("/order");
  };

  return (
    <div>
      <div>RestaurantById</div>

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
      </div>
    </div>
  );
}
