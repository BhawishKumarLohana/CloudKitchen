"use client";

import Link from "next/link";
import { useAuth } from "../providers/Auth";
export default function Navbar() {
  const {user,logout} = useAuth();

  
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="text-xl font-semibold">
          FOOD DELIVERY APP
        </Link>

        {/* Nav (desktop) */}
        <nav className="hidden gap-6 md:flex">
          <Link href="/order" className="text-sm text-gray-700 hover:text-gray-900">
            Order
          </Link>
          <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
            Home
          </Link>
          {user ? (
             <>
              <Link href="/profile" className="text-sm text-gray-700 hover:text-gray-900">
                {user.username}
              </Link>

              <Link href="#" onClick={logout} className="text-sm text-gray-700 hover:text-gray-900">
                Logout
              </Link>
            </>
            
          ):(
            <>
             <Link href="/signup" className="text-sm text-gray-700 hover:text-gray-900">
              Signup
            </Link>
            <Link href="/login" className="text-sm text-gray-700 hover:text-gray-900">
              Login
            </Link>
          </>


          )}
         
        </nav>
      </div>
    </header>
  );
}
