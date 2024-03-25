import { indexs } from "@/data/market"
import { newValue, random } from "@/utils/helper.utils"

export async function GET(request: Request) {
    const newIndexs = indexs.map((index) => {
        let ltp = index.ltp + newValue(index.open)
        let new_high = ltp > index.high ? ltp : index.high
        let new_low = ltp < index.low ? ltp : index.low
        let new_ltp = ltp
        let new_change = index.ltp - ltp
        let new_percentage_change = new_change / index.ltp * 100
        let new_volume = random(0, index.volume)
        return {
            ...index,
            high: new_high,
            low: new_low,
            ltp: new_ltp,
            change: new_change,
            percentage_change: new_percentage_change,
            volume: new_volume,
        }
    })

    return Response.json(newIndexs)
}
