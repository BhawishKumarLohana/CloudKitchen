"use client"
import { createContext,useContext,useEffect,useState } from "react";

const AuthCtx  = createContext(null);

export function AuthProvider({children}){
    const [user,setUser] =useState(null);

    useEffect( ()=>{
        try{
            const raw = localStorage.getItem("app_user");
            if(raw) setUser(JSON.parse(raw));

        }catch{}
    },[]);

      useEffect(() => {
    try {
      if (user) localStorage.setItem("app_user", JSON.stringify(user));
      else localStorage.removeItem("app_user");
    } catch {}
  }, [user]);

  const login = (u)=>setUser(u);
  const logout = () =>setUser(null);
  return(
    <AuthCtx.Provider value={{user,login,logout}}>
        {children}
    </AuthCtx.Provider>
  );


}
export function useAuth(){
    const  ctx = useContext(AuthCtx);
    if(!ctx) throw new Error("useAuth must be used inside");
    return ctx;
    
}