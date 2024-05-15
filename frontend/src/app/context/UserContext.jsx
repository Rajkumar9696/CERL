import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [ currentUser , setCurrentUser ] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [loggedIn, setLoggedIn] = useState(currentUser !== null);
   const router = useRouter();

    const logout = () => {
        sessionStorage.removeItem('user');
        setLoggedIn(false);
         router.push("/")
    }
    
    return (
        <UserContext.Provider value={{
            loggedIn, setLoggedIn, logout , currentUser , setCurrentUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext);

export default useUserContext;