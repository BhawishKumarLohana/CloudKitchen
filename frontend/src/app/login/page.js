"use client";
import { useState } from "react";
import { AuthLogin } from "../api/User";
import { useRouter } from "next/navigation";
import { useAuth } from "../providers/Auth";

function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [err, setErr] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const loginRequest = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const result = await AuthLogin(formData);
      console.log("result:", result);
      const username = result?.username || formData.username;
      login({ username });
      router.push("/");
    } catch (e) {
      setErr("Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-emerald-100">
        <form
          className="grid grid-cols-1 gap-4 px-8 py-10"
          onSubmit={loginRequest}
        >
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-extrabold text-slate-800">
              Welcome Back
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Log in to continue ordering your favorite food
            </p>
          </div>

          {/* Error */}
          {err && (
            <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-2 text-sm">
              {err}
            </div>
          )}

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

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 bg-emerald-600 text-white rounded-full py-3
                       font-semibold shadow-md hover:bg-emerald-700
                       hover:shadow-lg transition"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-xs text-center text-slate-500 mt-4">
            Don’t have an account yet? Sign up to get started.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;