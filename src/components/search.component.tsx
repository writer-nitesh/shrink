'use client'
import { equities, indexs } from "@/data/market";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiSearch } from "react-icons/hi";
import { SearchMenu } from "./searchMenu.component";
import { filterArrays } from "@/utils/helper.utils";
import { Equity, Market } from "@/utils/types.utils";
import { HiMagnifyingGlass, HiMagnifyingGlassCircle } from "react-icons/hi2";





export function Search() {
    const [search, setSearch] = useState<string>("")
    const [selected, setSelected] = useState<string>("all")

    const [searchResult, setSearchResult] = useState<(Market | Equity)[]>([])

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    function handelSelected(event: MouseEvent<HTMLButtonElement>) {
        const data = event.currentTarget.getAttribute("aria-label")
        if (data) {
            setSelected(data)
        }
    }

    useEffect(() => {
        if (search.trim() !== "") {
            setSearchResult(filterArrays(search))
        }


    }, [search])


    return (
        <div className='w-1/3'>
            <div className="flex gap-2 rounded-md py-1 pl-5 pr-2 border-[1px] border-gray-200 items-center align-middle justify-center">
                <HiSearch className="h-5 w-5 text-gray-400" />
                <input type="search" aria-label='search' placeholder='What you are looking for today?' value={search} onChange={handleSearch} />
            </div>
            {
                search && <div className="w-1/3  py-1 absolute rounded-b-md shadow-md z-10 bg-white mt-1">
                    <div className="justify-evenly flex py-2 px-4">
                        <button onClick={handelSelected} aria-label="all" className={`rounded-full px-6 text-sm py-1 border-[1px] ${selected == "all" ? "border-[#D32F2F] bg-red-50" : "border-gray-400"} `}>All</button>
                        <button onClick={handelSelected} aria-label="stocks" className={`rounded-full px-6 text-sm py-1 border-[1px]  ${selected == "stocks" ? "border-[#D32F2F] bg-red-50" : "border-gray-400"} `}>Stocks</button>
                        <button onClick={handelSelected} aria-label="index" className={`rounded-full px-6 text-sm py-1 border-[1px]  ${selected == "index" ? "border-[#D32F2F] bg-red-50" : "border-gray-400"} `}>Index</button>
                        <button onClick={handelSelected} aria-label="mf" className={`rounded-full px-6 text-sm py-1 border-[1px]  ${selected == "mf" ? "border-[#D32F2F] bg-red-50" : "border-gray-400"} `}>MF</button>
                        <button onClick={handelSelected} aria-label="fno" className={`rounded-full px-6 text-sm py-1 border-[1px]  ${selected == "fno" ? "border-[#D32F2F] bg-red-50" : "border-gray-400"} `}>F&O</button>
                    </div>
                    {
                        searchResult.length > 0 ? <div className="justify-evenly flex flex-col py-2 px-4 gap-2 ">
                            {
                                searchResult.map(({ name, symbol }) => {
                                    return <a href={`/explore/${name}`} className="flex gap-4 h-10 items-center border-b-[1px]">
                                        <div className="flex items-center w-full h-full align-middle  gap-4 ">
                                            <HiMagnifyingGlass className="h-5 w-5" />
                                            <span >{name}</span>
                                        </div>
                                        <div className="text-[12px] font-semibold text-gray-500">{symbol}</div>
                                    </a>
                                })
                            }

                        </div> : <SearchMenu selected={selected} />

                    }


                </div>
            }
        </div>
    )
}
