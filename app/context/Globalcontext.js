"use client"
import { useContext, createContext, useState, useEffect } from "react";


export const AppContext = createContext(null)

function GlobalProvider({ children }) {

    const api_url = "https://playvalorant.com/page-data/en-gb/page-data.json"

    const [header, setheader] = useState({})
    const [homenews, sethomenews] = useState([])
    const [hero, sethero] = useState({})
    const [gameplay, setgameplay] = useState({})
    const [agentsdata, setagentsdata] = useState({})
    const [homemap, sethomemap] = useState({})
    const [agents, setagents] = useState([])
    const [maps, setmaps] = useState([])

    const fetchapi = async () => {
        try {
            const res = await fetch(api_url)
            const data = await res.json()
            setheader(data?.result?.data?.contentstackHomepage?.headerModule?.heroVideo[0])
            sethomenews(data.result.data.allContentstackArticles.nodes.slice(0, 3))
            sethero(data?.result.data?.contentstackHomepage?.latestEpisodeOrAct)
            setgameplay(data?.result?.data?.contentstackHomepage?.gameplayModule)
            setagentsdata(data.result.data.contentstackHomepage.agentsModule)
            sethomemap(data?.result?.data?.contentstackHomepage?.mapsModule)
            console.log(data.result.data.contentstackHomepage.mapsModule);
        } catch (error) {
            console.log(error);
        }
    }


    const fetchagents = async () => {
        try {
            const res = await fetch("https://valorant-api.com/v1/agents")
            const data = await res.json()
            setagents(data?.data)
        } catch (error) {
            console.log(error);
        }
    }

    const fetchmaps = async () => {
        try {
            const res = await fetch("https://valorant-api.com/v1/maps")
            const data = await res.json()
            setmaps(data?.data)
            console.log(data.data);
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
        gameplay,
        agentsdata,
        homemap,
        fetchagents,
        agents,
        fetchmaps,
        maps

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