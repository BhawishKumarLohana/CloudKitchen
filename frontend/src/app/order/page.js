"use client";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../providers/Auth";
import { addOrder } from "../api/Order";
import { getUserByUsername } from "../api/User";

export default function OrderPage() {
  const [cart, setCart] = useState({ restaurantId: null, items: [] });
  const { user } = useAuth();

  useEffect(() => {
    const raw = sessionStorage.getItem("cart");
    if (raw) setCart(JSON.parse(raw));
  }, [user.username]);

  const { totalItems, subtotal } = useMemo(() => {
    const items = cart.items || [];
    console.log(items);
    const totalItems = items.reduce((n, it) => n + it.quantity, 0);
    const subtotal = items.reduce((sum, it) => sum + it.quantity * it.price, 0);
    console.log("Restaurant ID " + cart.restaurantId);
    console.log("User ID " + user?.username);

    return { totalItems, subtotal };
  }, [cart]);

  const submitOrder = async () => {
    try {
      // 1) Get userId from your API response
      const userObj = await getUserByUsername(user.username);
      const userId = userObj?.data.id;
      if (!userId) throw new Error("Missing userId from getUserByUsername");

      // 2) Normalize items to match backend keys
      const items = (cart?.items ?? []).map((it) => ({
        id: it.id,
        itemName: it.itemName,
        itemDescription: it.itemDescription,
        ingedrients: it.ingedrients ?? it.ingredients ?? [],
        price: Number(it.price),
        restaurantId: it.restaurantId,
        quantity: Number(it.quantity ?? 1),
      }));

      // 3) Final payload
      const orderDetails = { userId, items, total: subtotal };
      console.log("ORDER DETAILS: " + JSON.stringify(orderDetails));

      // 4) Send it
      const res = await addOrder(orderDetails);
      return res;
    } catch (err) {
      console.error("submitOrder error:", err.response?.data || err.message);
      throw err;
    }
  };

  if (!cart.items?.length) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-6">
        <div className="max-w-md w-full bg-white/70 backdrop-blur-sm border border-emerald-100 rounded-2xl shadow-lg p-8 text-center">
          <div className="text-4xl mb-2">🛒</div>
          <h2 className="text-xl font-semibold text-slate-800">
            No items selected
          </h2>
          <p className="text-slate-600 mt-1">
            Add some delicious items to your cart to place an order.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden">
          <div className="px-6 sm:px-8 pt-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
              🧾 Order Summary
            </h1>
          </div>

          <div className="px-6 sm:px-8 py-6">
            <ul className="divide-y divide-slate-200">
              {cart.items.map((it) => (
                <li
                  key={it.id}
                  className="py-4 flex items-center justify-between"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-800 truncate">
                      {it.itemName}
                    </div>
                    <div className="text-sm text-slate-600">
                      {/* keeping your existing keys/usage intact */}
                      {it.qty} × ${it.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-slate-900">
                      ${(it.qty * it.price).toFixed(2)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-slate-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-slate-700">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between text-base font-semibold text-slate-900">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              className="mt-8 w-full bg-emerald-600 text-white rounded-full py-3.5 text-base font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg transition"
              onClick={submitOrder}
            >
              Place Order
            </button>
          </div>
        </div>

        {/* Optional footnote */}
        <p className="text-center text-xs text-slate-500 mt-4">
          Taxes and delivery fees may apply at checkout.
        </p>
      </div>
    </div>
  );
}
