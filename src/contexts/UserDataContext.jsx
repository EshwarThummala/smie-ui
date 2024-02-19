import { createContext, useState, useContext } from "react";

const UserDataContext = createContext();

export function UserDataProvider({ children }){
    const [userData, setUserData] = useState({})

    return (<UserDataContext.Provider value={{ userData, setUserData}}>
        {children}
    </UserDataContext.Provider>);
 
}

export default function useUserDataContext(){
    return useContext(UserDataContext);
}