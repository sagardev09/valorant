"use client"
import { useContext, createContext, useState, useEffect } from "react";


export const AppContext = createContext(null)

function GlobalProvider({ children }) {

    const api_url = "https://playvalorant.com/page-data/en-gb/page-data.json"

    const [header, setheader] = useState({})
    const [homenews, sethomenews] = useState([])
    const [hero, sethero] = useState({})
    const [gameplay, setgameplay] = useState({})

    const fetchapi = async () => {
        try {
            const res = await fetch(api_url)
            const data = await res.json()
            setheader(data?.result?.data?.contentstackHomepage?.headerModule?.heroVideo[0])
            sethomenews(data.result.data.allContentstackArticles.nodes.slice(0, 3))
            sethero(data?.result.data?.contentstackHomepage?.latestEpisodeOrAct)
            setgameplay(data?.result?.data?.contentstackHomepage?.gameplayModule)
            console.log(data.result.data.contentstackHomepage.gameplayModule);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchapi()
    }, [])


    const contextdata = {
        header,
        homenews,
        hero,
        gameplay
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