import { useAppData } from "@/context/context";
import { useEffect } from "react";

export default function useEquityFetch(url: string) {
    const { setData } = useAppData()

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const newData = await res.json();
            setData(prevData => ({
                ...prevData,
                market: newData
            }));
        }

        fetchData();

        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId);

    }, [url]);


}
