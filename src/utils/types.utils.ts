export interface Market {
    name: string
    symbol: string
    exchange: string
    open: number
    close: number
    high: number
    low: number
    ltp: number
    change: number
    percentage_change: number
    volume: number
}
export interface Equity {
    name: string
    symbol: string
    exchange: string
    base: number
}