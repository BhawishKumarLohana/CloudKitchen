"use client";
import { useState } from "react";
import { createUser } from "../api/User";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    city: "",
    password: "",
  });

  const sendNewUserRequest = async (formData) => {
    const req = await createUser(formData);
    alert("Success");
    setFormData({
      username: "",
      address: "",
      city: "",
      password: "",
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(
      "SUBMIT",
      formData.username,
      formData.address,
      formData.city,
      formData.password
    );
    sendNewUserRequest(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-emerald-100">
        <form
          className="grid grid-cols-1 gap-4 px-8 py-10"
          onSubmit={formSubmit}
        >
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-extrabold text-slate-800">
              Create Account
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Join us and start ordering delicious food
            </p>
          </div>

          {/* Username */}
          <label className="text-sm font-semibold text-slate-700">
            Username
          </label>
          <input
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="border border-slate-300 rounded-xl px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-emerald-400
                       transition"
          />

          {/* Address */}
          <label className="text-sm font-semibold text-slate-700">
            Address
          </label>
          <input
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="border border-slate-300 rounded-xl px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-emerald-400
                       transition"
          />

          {/* City */}
          <label className="text-sm font-semibold text-slate-700">
            City
          </label>
          <input
            placeholder="City"
            value={formData.city}
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
            className="border border-slate-300 rounded-xl px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-emerald-400
                       transition"
          />

          {/* Password */}
          <label className="text-sm font-semibold text-slate-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="border border-slate-300 rounded-xl px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-emerald-400
                       transition"
          />

          {/* Submit Button */}
          <button
            className="mt-6 bg-emerald-600 text-white rounded-full py-3
                       font-semibold shadow-md hover:bg-emerald-700
                       hover:shadow-lg transition"
            type="submit"
          >
            Sign Up
          </button>

          {/* Footer */}
          <p className="text-xs text-center text-slate-500 mt-4">
            By signing up, you agree to our terms and privacy policy.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;