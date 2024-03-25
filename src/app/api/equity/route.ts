import { equities } from "@/data/market"
import { newValue, random } from "@/utils/helper.utils"
import { Market } from "@/utils/types.utils"

export async function GET(request: Request) {
    const newEquities = equities.map((equity) => {
        const base = equity.base

        const company: Market = {
            name: equity.name,
            symbol: equity.symbol,
            exchange: equity.exchange,
            open: base,
            close: base + Math.floor(0.05 * Math.abs(base)),
            high: base,
            low: base,
            ltp: base,
            change: 0,
            percentage_change: 0,
            volume: base
        }


        let ltp = company.ltp + newValue(company.open)
        let new_high = ltp > company.high ? ltp : company.high
        let new_low = ltp < company.low ? ltp : company.low
        let new_ltp = ltp
        let new_change = company.ltp - ltp
        let new_percentage_change = new_change / company.ltp * 100
        let new_volume = Math.floor(1024 * Math.abs(company.volume))

        const newPrices = {
            ...company,
            high: new_high,
            low: new_low,
            ltp: new_ltp,
            change: new_change,
            percentage_change: new_percentage_change,
            volume:  random(0, company.volume)
        }

        return newPrices
    })


    return Response.json(newEquities)
}
