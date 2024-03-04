import { createContext, useContext, useState } from "react"

const SpinnerContext = createContext();

export function SpinnerProvider({ children }){

    const [ loader, setLoader ] = useState(true);

    return <SpinnerContext.Provider value={{ loader, setLoader }}>
        {children}
    </SpinnerContext.Provider>
}

export default function useSpinnerContext(){
    return useContext(SpinnerContext);
}