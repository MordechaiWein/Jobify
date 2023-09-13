import React, { useState, useEffect } from "react";

const MyContext =  React.createContext() 

function MyProvider({children}) {

    const [user, setUser] = useState(null)
    const [jobs, setJobs] = useState([])
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

    useEffect(() => {
        fetch('/jobs')
        .then(response => response.json())
        .then(data => setJobs(data))
    },[])
     
    return (
        <MyContext.Provider
            value={{
                user, 
                setUser,
                isLoading,
                jobs,
                setJobs
            }}
        >
            {children}                                                                                     
        </MyContext.Provider>
    ) 
}
export { MyProvider, MyContext}








