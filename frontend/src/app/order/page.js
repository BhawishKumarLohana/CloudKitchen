"use client";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../providers/Auth";
import { addOrder } from "../api/Order";
import { getUserByUsername } from "../api/User";

export default function OrderPage() {
  const [cart, setCart] = useState({ restaurantId: null, items: [] });
  const {user} = useAuth();


  useEffect(() => {
    const raw = sessionStorage.getItem("cart");
    if (raw) setCart(JSON.parse(raw));
  }, [user.username]);

  

  const { totalItems, subtotal } = useMemo(() => {
    const items = cart.items || [];
    console.log(items);
    const totalItems = items.reduce((n, it) => n + it.quantity, 0);
    const subtotal = items.reduce((sum, it) => sum + it.quantity * it.price, 0);
    console.log("Restaurant ID "+cart.restaurantId);
    console.log("User ID "+user?.username);

    return { totalItems, subtotal };
  }, [cart]);
  
  const submitOrder = async () => {
  try {
    // 1) Get userId from your API response (supports either .id or .userId)
    //console.log(user.username);
    const userObj = await getUserByUsername(user.username);
    //console.log(userObj.data.id);

    const userId = userObj?.data.id;
    //console.log(userId);
    if (!userId) throw new Error("Missing userId from getUserByUsername");

    // 2) Normalize items to match backend keys
    //console.log( "CARTS: "+JSON.stringify(cart?.items));
    const items = (cart?.items ?? []).map(it => ({
      id: it.id,
      itemName: it.itemName,
      itemDescription: it.itemDescription,
      ingedrients: it.ingedrients ?? it.ingredients ?? [], // keep your backend's spelling
      price: Number(it.price),
      restaurantId: it.restaurantId,
      quantity: Number(it.quantity ?? 1),
    }));
    //console.log("ITEMS JSON:", JSON.stringify(items, null, 2));


    // 3) Compute total (or you can pass cart.total if you already have it)
    //const total = items.reduce((sum, it) => sum + (it.price || 0) * (it.quantity || 0), 0);
     //console.log("TOTL: "+subtotal);

    // 4) Final payload (exact shape that works in Postman)
    const orderDetails = { userId, items, total:subtotal };
    console.log("ORDER DETAILS: "+JSON.stringify(orderDetails))

    // 5) Send it
    const res = await addOrder(orderDetails); // ensure addOrder does POST JSON
    return res;
  } catch (err) {
    console.error("submitOrder error:", err.response?.data || err.message);
    throw err;
  }
};


  if (!cart.items?.length) {
    return <div className="p-6">No items selected.</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Order Summary</h1>

      <ul className="divide-y">
        {cart.items.map((it) => (
          <li key={it.id} className="py-3 flex justify-between items-center">
            <div>
              <div className="font-medium">{it.itemName}</div>
              <div className="text-sm text-gray-600">
                {it.qty} × ${it.price.toFixed(2)}
              </div>
            </div>
            <div className="font-semibold">
              ${(it.qty * it.price).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-sm">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex justify-between text-base font-semibold mt-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>

      <button className="mt-6 w-full border-2 border-black rounded-2xl py-2 hover:bg-emerald-50"
      onClick={submitOrder}
      >
        Place Order
      </button>
    </div>
  );
}
