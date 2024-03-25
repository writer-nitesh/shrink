"use client"
import { useAppData } from '@/context/context'
import { marketOpenMessage } from '@/utils/helper.utils'
import useEquityFetch from '@/utils/useEquityFetch'
import useIndexFetch from '@/utils/useIndexFetch'
import React, { MouseEvent, useState } from 'react'

export default function Explore() {
    const [view, setView] = useState("stocks")
    const { data } = useAppData()
    const { index, market } = data

    useIndexFetch("/api/index")
    useEquityFetch("/api/equity")

    function handleView(event: MouseEvent<HTMLDivElement>) {
        const data = event.currentTarget.getAttribute("aria-label")
        if (data) {
            setView(data)
        }
    }


    return (
        <div className='w-full mt-4 gap-4 flex flex-col'>

            <div className='flex gap-2 w-full text-lg font-semibold border-b-[1px] py-2  '>
                <div onClick={handleView} className={`${view == "stocks" && "text-negative"} cursor-pointer `} aria-label='stocks'>Stocks</div>
                <div onClick={handleView} className={`${view == "mf" && "text-negative"} cursor-pointer`} aria-label='mf'>Mutual Fund</div>
            </div>

            {

                view == "stocks" ?
                    <>

                        <div>
                            {
                                marketOpenMessage()

                            }

                        </div>

                        <h1 className='font-bold text-lg'>Index</h1>

                        <div className='flex gap-4 '>

                            {

                                market.length > 0 && index.map(({ name, ltp, change }) => {

                                    return <a href={`/explore/${name}`} className='border-[1px] rounded-md p-2 items-center min-w-56'>

                                        <div className='font-semibold uppercase'>{name}</div>
                                        <div>
                                            {ltp.toFixed(2)} <span className={`${change > 0 ? "text-postive" : "text-negative"}`}>({change.toFixed(2)})</span>
                                        </div>

                                    </a>
                                })
                            }

                        </div>

                        <h1 className='font-bold text-lg'>Most Sold in Shrinkk </h1>
                        <div className='flex gap-4 '>

                            {

                                market.length > 0 && market.map(({ name, ltp, change, exchange }, index) => {

                                    if (exchange == "NSE") {
                                        return <a href={`/explore/${name}`} className='border-[1px] rounded-md p-2 items-center min-w-56'>

                                            <div className='font-semibold uppercase'>{name}</div>
                                            <div>
                                                {ltp.toFixed(2)} <span className={`${change > 0 ? "text-postive" : "text-negative"}`}>({change.toFixed(2)})</span>
                                            </div>

                                        </a>
                                    }
                                })
                            }

                        </div>


                    </>

                    :

                    <div className='text-center py-4 font-semibold capitalize'>

                        Comming Soon
                    </div>


            }



        </div>
    )
}
