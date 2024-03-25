import { Equity, Market } from "@/utils/types.utils"

export const indexs: Array<Market> = [
    {
        name: "S&P BSE Sensex",
        symbol: "SENSEX",
        open: 72461.94,
        close: 72748.42,
        high: 72490.09,
        low: 71933.35,
        ltp: 72012.05,
        change: 0,
        percentage_change: 0,
        volume: 1245684,
        exchange: "index"
    },
    {
        name: "NIFTY 50",
        symbol: "NIFTY_50",
        exchange: "index",
        open: 21946.45,
        close: 22055.70,
        high: 21978.30,
        low: 21793.10,
        ltp: 21817.45,
        change: -238.25,
        percentage_change: 1.08,
        volume: 699658
    },
    {
        name: "Nifty Bank",
        symbol: "NIFTY_BANK",
        exchange: "index",
        open: 46421.90,
        close: 46575.90,
        high: 46602.35,
        low: 46258.75,
        ltp: 46384.80,
        change: -191.10,
        percentage_change: 0.41,
        volume: 90056
    },
    {
        name: "Nifty Financial Services Index",
        symbol: "FINNIFTY",
        exchange: "index",
        open: 20693.55,
        close: 20714.90,
        high: 20846.35,
        low: 20675.75,
        ltp: 20789.80,
        change: -68.26,
        percentage_change: 0.41,
        volume: 90056
    },


]

export const equities: Array<Equity> = [
    {
        name: "Reliance Industries",
        symbol: "RELIANCE",
        exchange: "NSE",
        base: 2849.15
    },
    {
        name: "Reliance Industries",
        symbol: "RELIANCE",
        exchange: "BSE",
        base: 2848.90
    },
    {
        name: "Infosys",
        symbol: "INFY",
        exchange: "NSE",
        base: 1566.50
    },
    {
        name: "Infosys",
        symbol: "INFY",
        exchange: "BSE",
        base: 1566.45
    },
    {
        name: "Tata Motors",
        symbol: "TTMT",
        exchange: "BSE",
        base: 958.05
    },
    {
        name: "Tata Steel",
        symbol: "TATASTEEL",
        exchange: "NSE",
        base: 147.70
    },
    {
        name: "Tata Motors",
        symbol: "TTMT",
        exchange: "BSE",
        base: 950.05
    },
    {
        name: "Tata Steel",
        symbol: "TATASTEEL",
        exchange: "BSE",
        base: 146.75
    },
]