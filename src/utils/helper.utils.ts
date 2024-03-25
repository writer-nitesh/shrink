import { equities, indexs } from "@/data/market";
import { Equity, Market } from "./types.utils";

export function random(start: number, stop: number) {
    if (start > stop) {
        throw new Error("Lower bound (start) must be less than or equal to upper bound (stop).");
    }

    const range = stop - start + 1;
    const availableValues: Set<number> = new Set(Array.from({ length: range }, (_, i) => start + i));

    for (let i = 0; i < range; i++) {
        const randomIndex = Math.floor(Math.random() * availableValues.size);
        const randomValue = Array.from(availableValues)[randomIndex];

        availableValues.delete(randomValue);
        if (availableValues.size === 0) {
            return 1;
        }

        return randomValue;
    }

    // Should never reach here (all values should be used before the loop exits)
    throw new Error("Unexpected error: Non-repeating random generation failed.");
}

// export function newValue(value: number, stop: number = value) {
//     return value + random(1, random(1, stop))
// }



export function newValue(value: number): number {
    const newValue = Math.floor(0.9 * Math.abs(value));
    return random(-newValue, newValue);;
}



export function filterArrays(searchString: string) {
    const newindexs = indexs.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase()));
    const newEquities = equities.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase()));
    const searched = [...newindexs, ...newEquities]
    return searched
}


export function filterLivemarket(searchString: string, indexs: Market[], equities: Market[]) {
    const newindexs = indexs.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase()));
    const newEquities = equities.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase()));
    const searched = [...newindexs, ...newEquities]
    return searched
}


export function marketOpenMessage(): string {
    const currentDateTime: Date = new Date();
    const currentDay: number = currentDateTime.getDay();


    const marketOpenTime: Date = new Date(currentDateTime);
    marketOpenTime.setHours(9, 30, 0, 0);
    const marketCloseTime: Date = new Date(currentDateTime);
    marketCloseTime.setHours(15, 30, 0, 0);

    if (currentDay === 6) {  // Saturday
        return "The market will open on Monday at 9:30 AM.";
    } else if (currentDay === 0) {  // Sunday
        return "The market will open on Monday at 9:30 AM.";
    } else if (currentDateTime < marketOpenTime) {
        const timeLeft: number = marketOpenTime.getTime() - currentDateTime.getTime();
        const hoursLeft: number = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutesLeft: number = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        return `The market will open at 9:30 AM. Time left: ${hoursLeft} hours and ${minutesLeft} minutes.`;
    } else if (currentDateTime > marketCloseTime) {
        const nextMarketDay: Date = new Date(currentDateTime);
        nextMarketDay.setDate(nextMarketDay.getDate() + 1);
        nextMarketDay.setHours(9, 30, 0, 0);
        const timeLeft: number = nextMarketDay.getTime() - currentDateTime.getTime();
        const hoursLeft: number = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutesLeft: number = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        return `The market will open on ${nextMarketDay.toLocaleDateString('en-US', { weekday: 'long' })} at 9:30 AM. Time left: ${hoursLeft} hours and ${minutesLeft} minutes.`;
    } else {
        return "The market is currently open.";
    }
}

