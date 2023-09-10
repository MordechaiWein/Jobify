import React from "react";

const MyContext =  React.createContext() 

function MyProvider({children}) {
    
    const name = "mordechai"
    return (
        <MyContext.Provider
            value={{name}}
        >
            {children}                                                                                     
        </MyContext.Provider>
    ) 
}
export { MyProvider, MyContext}








