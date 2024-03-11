import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || false);

    const login = ()=>{
        setCurrentUser({
            id:1,
            name:"Chirag",
            profilePic:"https://images.pexels.com/photos/19510924/pexels-photo-19510924/free-photo-of-women-in-coats-in-forest-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    }

    useEffect(() =>{
        localStorage.setItem('user',JSON.stringify(currentUser));
    },[currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}