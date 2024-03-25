"use client"
import React, { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { Market } from "@/utils/types.utils";

interface Data {
    user: string;
    market: Market[];
    index: Market[];
}

const INITIAL_DATA: Data = {
    user: "false",
    market: [],
    index: []
};


interface AppContextProps {
    data: Data;
    setData: React.Dispatch<React.SetStateAction<Data>>;
}

const AppContext = createContext<AppContextProps>({
    data: INITIAL_DATA,
    setData: () => { }
});

interface AppDataProviderProps {
    children: ReactNode;
}

const AppDataProvider: React.FC<AppDataProviderProps> = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<Data>(INITIAL_DATA);

    useEffect(() => {
        const user = window.localStorage.getItem("user")
        if (user !== null) {
            setData(prevData => ({
                ...prevData,
                user: user
            }));
        }
        
    }, [])

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    );
};

function useAppData() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppData must be used within an AppDataProvider");
    }
    return context;
}

export { AppContext, AppDataProvider, useAppData };
