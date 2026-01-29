"use client";
import { addFoodItem, getFoodList } from "@/app/api/Food";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RestaurantById() {
  const router = useRouter();
  const { id } = useParams();

  const [food, setFoodList] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [cart, setCart] = useState({}); // { [id]: { id, itemName, price, qty } }
  const [newItemModal, setNewItemModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    restaurantId: "",
    itemName: "",
    itemDescription: "",
    Ingedrients: "",
    price: "",
    quantity: "",
  });

  const getRestaurantById = async (rid) => {
    try {
      const data = await getFoodList(rid);
      setRestaurant(data.restaurant || {});
      setFormData((prev) => ({ ...prev, restaurantId: data.restaurant?.id }));
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
        it.id === clickedItem.id ? { ...it, quantity: it.quantity - 1 } : it
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

  const AddNewItemByRes = async (e) => {
    e.preventDefault();
    const res = await addFoodItem(formData);
    console.log(res.data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            {restaurant?.name || "Loading..."}
          </h1>
          {restaurant?.city || restaurant?.address ? (
            <p className="mt-1 text-slate-600">
              {restaurant?.address} {restaurant?.city ? `• ${restaurant.city}` : ""}
            </p>
          ) : null}
        </div>

        {/* Actions Row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button
            className="bg-emerald-600 text-white rounded-full px-6 py-2.5 text-sm font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg transition"
            onClick={() => setNewItemModal(true)}
          >
            + Add New Item
          </button>

          <button
            className="bg-white text-slate-800 rounded-full px-6 py-2.5 text-sm font-semibold border border-emerald-200 hover:bg-emerald-50 transition"
            onClick={goToOrder}
          >
            Go to Order
          </button>

          <span className="ml-auto text-sm text-slate-600">
            Items in cart:{" "}
            {Object.values(cart).reduce((n, it) => n + it.qty, 0)}
          </span>
        </div>

        {/* Food List */}
        <div
          className="grid gap-6
                     sm:grid-cols-1
                     md:grid-cols-2
                     lg:grid-cols-3
                     xl:grid-cols-4"
        >
          {food.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-emerald-100 overflow-hidden"
            >
              <div className="p-5">
                <h2 className="text-lg font-bold text-slate-900">
                  {item.itemName}
                </h2>
                <p className="text-sm text-slate-600 mt-1 line-clamp-3">
                  {item.itemDescription}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-emerald-700 font-extrabold">
                      ${item.price}
                    </p>
                    <p className="text-xs text-slate-500">
                      In stock: {item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => addItem(item)}
                    className="bg-emerald-600 text-white rounded-full px-4 py-2 text-sm font-semibold shadow hover:bg-emerald-700 transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Item Modal */}
        {newItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setNewItemModal(false)}
            />
            <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden">
              <div className="px-6 sm:px-8 pt-8">
                <h3 className="text-2xl font-extrabold text-slate-800">
                  Add New Item
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Create a new menu item for this restaurant.
                </p>
              </div>

              <form onSubmit={AddNewItemByRes} className="px-6 sm:px-8 py-6">
                <div className="grid grid-cols-1 gap-4">
                  <label className="text-sm font-semibold text-slate-700">
                    ItemName
                  </label>
                  <input
                    placeholder="ItemName"
                    onChange={(e) =>
                      setFormData({ ...formData, itemName: e.target.value })
                    }
                    className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                  />

                  <label className="text-sm font-semibold text-slate-700">
                    itemDescription
                  </label>
                  <input
                    placeholder="itemDescription"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        Ingedrients: e.target.value
                          .split(",")
                          .map((i) => i.trim()),
                      });
                    }}
                    className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                  />

                  <label className="text-sm font-semibold text-slate-700">
                    Ingredients
                  </label>
                  <input
                    placeholder="Ingredients"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        Ingedrients: e.target.value,
                      });
                    }}
                    className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                  />

                  <label className="text-sm font-semibold text-slate-700">
                    Price
                  </label>
                  <input
                    placeholder="Price"
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                  />

                  <label className="text-sm font-semibold text-slate-700">
                    quantity
                  </label>
                  <input
                    placeholder="Quantity"
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                  />
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    className="bg-slate-100 text-slate-700 rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-slate-200 transition"
                    onClick={() => setNewItemModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-600 text-white rounded-full px-6 py-2.5 text-sm font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg transition"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Footer helper */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Tip: Use the “Add” button to add items to your cart, then proceed to the order page.
        </p>
      </div>
    </div>
  );
}
