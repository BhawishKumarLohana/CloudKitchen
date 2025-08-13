"use client";
import { useEffect, useMemo, useState } from "react";

export default function OrderPage() {
  const [cart, setCart] = useState({ restaurantId: null, items: [] });

  useEffect(() => {
    const raw = sessionStorage.getItem("cart");
    if (raw) setCart(JSON.parse(raw));
  }, []);

  const { totalItems, subtotal } = useMemo(() => {
    const items = cart.items || [];
    const totalItems = items.reduce((n, it) => n + it.qty, 0);
    const subtotal = items.reduce((sum, it) => sum + it.qty * it.price, 0);
    console.log(cart.restaurantId);

    return { totalItems, subtotal };
  }, [cart]);

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

      <button className="mt-6 w-full border-2 border-black rounded-2xl py-2 hover:bg-emerald-50">
        Place Order
      </button>
    </div>
  );
}
