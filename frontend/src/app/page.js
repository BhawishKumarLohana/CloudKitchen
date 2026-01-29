"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import FoodCard from "./components/FoodCard";
import {
  getAllRestaurants,
  createRestaurant,
  uploadImage,
} from "./api/Restaurant";
import { useState, useEffect } from "react";

export default function Home() {
  const [Restaurants, setRestaurants] = useState([]);
  const [createRestModal, setcreateRestModal] = useState(false);
  const [imageUpload, setImageUploaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    description: "",
    rating: "4",
    imageUrl: "",
  });

  async function uploadFile(file) {
    try {
      const result = await uploadImage(file);
      console.log("Upload successful:", result);
      return result.secure_url;
    } catch (err) {
      console.error("Upload failed:", err);
    }
  }

  async function sendCreateRestaurant(formData) {
    if (imageUpload) {
      await createRestaurant(formData);
      setFormData({
        name: "",
        description: "",
        address: "",
        city: "",
      });
      alert("Successful Add");
      setcreateRestModal(false);
    } else {
      console.log("sorry image is not uploaded, try again");
    }
  }

  useEffect(() => {
    async function fetchRestarants() {
      const data = await getAllRestaurants();
      console.log("data" + data.data[0].name);
      setRestaurants(data.data);
      console.log("Res: " + Restaurants);
    }

    fetchRestarants();
  }, [Restaurants]);

  let modalContent = null;

  if (createRestModal) {
    modalContent = (
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl border border-emerald-100">
        <h2 className="text-3xl font-extrabold text-slate-800 px-10 pt-8">
          Create Restaurant
        </h2>

        <form
          className="grid grid-cols-1 gap-4 px-10 py-6"
          onSubmit={() => {
            setcreateRestModal(false);
            console.log(formData);
          }}
        >
          {/* Image Upload */}
          <div
            className="border-2 border-dashed border-emerald-300 rounded-xl p-8 text-center cursor-pointer text-slate-600 hover:bg-emerald-50 transition"
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              console.log(file);
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            Drag &amp; Drop your image here
            <br />
            <input
              type="file"
              accept="image/*"
              className="mt-3"
              onChange={async (e) => {
                const file = e.target.files[0];
                console.log("Storing " + file);
                const url = await uploadFile(file);
                setFormData({ ...formData, imageUrl: url });
                setImageUploaded(true);
              }}
            />
          </div>

          {/* Inputs */}
          <label className="text-sm font-semibold text-slate-700">Name</label>
          <input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          />

          <label className="text-sm font-semibold text-slate-700">Description</label>
          <input
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          />

          <label className="text-sm font-semibold text-slate-700">Address</label>
          <input
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          />

          <label className="text-sm font-semibold text-slate-700">City</label>
          <input
            placeholder="City"
            value={formData.city}
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
            className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          />
        </form>

        {/* Modal Actions */}
        <div className="flex justify-end gap-3 px-10 pb-8">
          <button
            className="bg-emerald-600 text-white rounded-full px-8 py-3 text-sm hover:bg-emerald-700 shadow-md hover:shadow-lg transition"
            onClick={() => sendCreateRestaurant(formData)}
          >
            Create
          </button>

          <button
            className="bg-slate-100 text-slate-700 rounded-full px-8 py-3 text-sm hover:bg-slate-200 transition"
            onClick={() => {
              setcreateRestModal(false);
              setFormData({
                name: "",
                description: "",
                address: "",
                city: "",
              });
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-6 sm:px-8 lg:px-10 py-10">
        {createRestModal ? (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            {modalContent}
          </div>
        ) : (
          <>
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-extrabold text-slate-800 mb-6">
                All Restaurants
              </h1>

              <button
                className="bg-emerald-600 text-white rounded-full px-8 py-3 text-lg shadow-md hover:bg-emerald-700 hover:shadow-lg transition"
                onClick={() => setcreateRestModal(true)}
              >
                Create Restaurant
              </button>

              <div
                className="grid gap-8 px-0 py-10
                           sm:grid-cols-1
                           md:grid-cols-2
                           lg:grid-cols-3
                           xl:grid-cols-4"
              >
                {Restaurants.map((restaurant) => (
                  <div
                    key={restaurant.id ?? restaurant.name}
                    className="transform hover:scale-[1.02] transition-transform"
                  >
                    <FoodCard
                      id={restaurant.id}
                      name={restaurant.name || ""}
                      description={restaurant.description || ""}
                      address={restaurant.address || ""}
                      city={restaurant.city || ""}
                      rating={restaurant.rating || 0}
                      link={restaurant.imageUrl || ""}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}