import React, { useState, useEffect } from "react";

const MyContext =  React.createContext() 

function MyProvider({children}) {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch("/me")
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    setUser(data)
                    setIsLoading(false)
                })
            } else {setIsLoading(false)}
        })
    },[])
     
    return (
        <MyContext.Provider
            value={{
                user, 
                setUser,
                isLoading
            }}
        >
            {children}                                                                                     
        </MyContext.Provider>
    ) 
}
export { MyProvider, MyContext}








