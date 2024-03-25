import { useAppData } from "@/context/context";
import { useEffect, useState } from "react";

export default function useIndexFetch(url: string) {
    const { setData, data } = useAppData()

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const newData = await res.json();
            setData(prevData => ({
                ...prevData,
                index: newData
            }));
        }

        fetchData();

        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId);

    }, [url]);


}
