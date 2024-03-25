import { equities, indexs } from "@/data/market"
import { FaArrowTrendUp } from "react-icons/fa6"

export function SearchMenu({ selected }: { selected: string }) {
    if (selected == "all") {
        return <div className="justify-evenly flex flex-col py-2 px-4 gap-2 ">
            {
                indexs.map(({ name, symbol }) => {
                    return <a href={`/explore/${name.replace(" ", "_")}`} className="flex gap-4 h-10 items-center border-b-[1px]">

                        <div className="flex items-center w-full h-full align-middle  gap-4 ">
                            <FaArrowTrendUp className="h-5 w-5" />
                            <span >{name}</span>
                        </div>
                        <div className="text-[12px] font-semibold text-gray-500">{symbol}</div>
                    </a>
                })

            }
            {
                equities.map(({ name, symbol }) => {
                    return <a href={`/explore/${name.replace(" ", "_")}`} className="flex gap-4 h-10 items-center border-b-[1px]">

                        <div className="flex items-center w-full h-full align-middle  gap-4 ">
                            <FaArrowTrendUp className="h-5 w-5" />
                            <span >{name}</span>
                        </div>
                        <div className="text-[12px] font-semibold text-gray-500">{symbol}</div>
                    </a>
                })

            }
        </div>
    }

    else if (selected == "stocks") {
        return <div className="justify-evenly flex flex-col py-2 px-4 gap-2 ">

            {
                equities.map(({ name, symbol }) => {
                    return <a href={`/explore/${name.replace(" ", "_")}`} className="flex gap-4 h-10 items-center border-b-[1px]">

                        <div className="flex items-center w-full h-full align-middle  gap-4 ">
                            <FaArrowTrendUp className="h-5 w-5" />
                            <span >{name}</span>
                        </div>
                        <div className="text-[12px] font-semibold text-gray-500">{symbol}</div>
                    </a>
                })

            }
        </div>
    }

    else if (selected == "index") {
        return <div className="justify-evenly flex flex-col py-2 px-4 gap-2 ">
            {
                indexs.map(({ name, symbol }) => {
                    return <a href={`/explore/${name.replace(" ", "_")}`} className="flex gap-4 h-10 items-center border-b-[1px]">

                        <div className="flex items-center w-full h-full align-middle  gap-4 ">
                            <FaArrowTrendUp className="h-5 w-5" />
                            <span >{name}</span>
                        </div>
                        <div className="text-[12px] font-semibold text-gray-500">{symbol}</div>
                    </a>
                })

            }
        </div>
    }

    else {
        return <div className="justify-evenly flex flex-col py-2 px-4 gap-2 ">
            <div className="flex gap-4 h-10 items-center justify-center capitalize">
                comming soon
            </div>
        </div>
    }
}
