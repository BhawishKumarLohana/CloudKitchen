import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./providers/Auth";
import Navbar from "./components/navbar";
export const metadata = {
  title: "Food Delivery Application",
  description: "Food Delivery Application made by Bhawish Kumar as prototype Project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
         <AuthProvider>
          <Navbar/>
          {children}
          
          </AuthProvider>
        
      </body>
    </html>
  );
}
