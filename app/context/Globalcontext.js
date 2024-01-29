"use client"
import { useContext, createContext, useState, useEffect } from "react";


export const AppContext = createContext(null)

function GlobalProvider({ children }) {

    const api_url = "https://playvalorant.com/page-data/en-gb/page-data.json"

    const [header, setheader] = useState({})

    const fetchapi = async () => {
        try {
            const res = await fetch(api_url)
            const data = await res.json()
            setheader(data?.result?.data?.contentstackHomepage?.headerModule?.heroVideo[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchapi()
    }, [])


    const contextdata = {
        header
    }

    return (
        <AppContext.Provider value={contextdata}>
            {children}
        </AppContext.Provider>
    )
}

export default GlobalProvider

export const useAppContext = () => {
    return useContext(AppContext)
}