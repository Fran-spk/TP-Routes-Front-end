import { redirect, Route, Routes } from "react-router-dom";
import { Login } from "../components/login";
import { Admin } from "../components/admin";
import { Home } from "../components/home";
import { Products } from "../components/products";
import  { useState } from "react";
import type { user } from "../types/user";
import { ProtectedRouter } from "./ProtectedRouter";


export const AppRouter=()=>{
    const [isUser,setIsUser] = useState<user|null> (null);
    const setearUser =() =>{
        const User: user ={
            id:1,
            name: 'fran',
            username: 'fran123',
            email: 'abc@gmail.com',
            permissionLevel: ['admin']
        };
        setIsUser(User);
    }
    return(
        <Routes>
            <Route path="/login" element={<Login login={setearUser}/>}></Route>
            <Route
                    path="/admin"
                    element={
                        <ProtectedRouter
                        isAllowed={!!isUser && isUser.permissionLevel.includes("admin")}
                        redirecTo="/home"
                        >
                        <Admin />
                        </ProtectedRouter>
                    }/>
            <Route element={<ProtectedRouter isAllowed={!!isUser} />}>
                   <Route path="/home" element={<Home/>}></Route>
                   <Route path="/products" element={<Products/>}></Route>
            </Route>

        </Routes> 
    );
}