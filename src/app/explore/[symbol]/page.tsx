'use client'

import { useAppData } from '@/context/context'
import { filterLivemarket } from '@/utils/helper.utils'
import { Market } from '@/utils/types.utils'
import useEquityFetch from '@/utils/useEquityFetch'
import useIndexFetch from '@/utils/useIndexFetch'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export default function Symbol() {

  const [stock, setStock] = useState<Market>();
  const [currentMarket, setCurrentMarket] = useState("BSE")
  const [chartY, setChartY] = useState<Array<number>>([])
  const [chartX, setChartX] = useState<Array<string>>([])


  const { data: { index, market } } = useAppData()

  useIndexFetch("/api/index")
  useEquityFetch("/api/equity")

  const pathname = usePathname()

  useEffect(() => {
    const stockName = decodeURIComponent(pathname.split("/").pop() || "");
    const live = filterLivemarket(stockName || "", index, market);
    const liveArray = Array.isArray(live) ? live : [live];

    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}`

    if (liveArray[0]?.exchange == "index") {
      setStock(liveArray[0])
      setChartX(prev => ([...prev, time]));
      setChartY(prev => [...prev, liveArray[0]?.ltp]);
    }
    else {
      if (currentMarket === liveArray[0]?.exchange) {
        setStock(liveArray[0])
        setChartX(prev => ([...prev, time]));
        setChartY(prev => [...prev, liveArray[0]?.ltp]);
      }
      else {
        setStock(liveArray[1])
        setChartX(prev => ([...prev, time]));
        setChartY(prev => [...prev, liveArray[1]?.ltp]);
      }
    }

  }, [index, market]);






  function handleCurrentMarket() {
    if (currentMarket === "BSE") {
      setCurrentMarket("NSE")
    }
    else {
      setCurrentMarket("BSE")
    }
  }





  return (
    <div className='flex flex-col my-5 gap-4'>
      {stock && <>

        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <h1 className='font-bold text-2xl'>{stock.name}</h1>
            {
              stock.exchange !== "index" && <button onClick={handleCurrentMarket} className={`rounded-full px-6 text-sm py-1 border-[1px]`}>{currentMarket}</button>

            }
          </div>
          <div>
            {stock.ltp}
            <span
              className={`${stock.change > 0 ? "text-postive" : "text-negative"} gap-2`}
            >
              <span>  ({stock.change.toFixed(2)})</span>
              <span>  {stock.percentage_change.toFixed(2)}%</span>
            </span>
          </div>

        </div>
        <div className='h-96 '>
          {
            chartX && chartY && <Line data={{ labels: chartX, datasets: [{ data: chartY }] }} options={{ responsive: true }} />
          }


        </div>
        <div className='w-1/2'>

          <div className='flex items-center justify-between gap-2 '>
            <div className='w-full p-2 capitalize flex justify-between'>
              <span>open</span> <span className={`${stock.open > 0 ? "text-postive" : "text-negative"}`} >{stock.open}</span>
            </div>
            <div className='w-full p-2 capitalize flex justify-between'>
              <span>close</span> <span className={`${stock.close > 0 ? "text-postive" : "text-negative"}`} >{stock.close}</span>
            </div>

          </div>
          <div className='flex items-center justify-between gap-2 '>
            <div className='w-full p-2 capitalize flex justify-between'>
              <span>high</span> <span className={`${stock.high > 0 ? "text-postive" : "text-negative"}`} >{stock.high}</span>
            </div>
            <div className='w-full p-2 capitalize flex justify-between'>
              <span>low</span> <span className={`${stock.low > 0 ? "text-postive" : "text-negative"}`} >{stock.low}</span>
            </div>

          </div>
          <div className='flex items-center justify-between gap-2 '>
            <div className='w-full p-2 capitalize flex justify-between'>
              <span>volume</span> <span className={`${stock.volume > 0 ? "text-postive" : "text-negative"}`} >{stock.volume}</span>
            </div>
            <div className='w-full p-2 capitalize flex justify-between'>
              <span>change</span><span className={`${stock.change > 0 ? "text-postive" : "text-negative"}`} >{stock.change.toFixed(2)}</span>
            </div>

          </div>

        </div>



      </>}


    </div >
  )
}
