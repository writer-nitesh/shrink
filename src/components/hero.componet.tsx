import Image from "next/image";
import heroImage from "../assets/images/stock_prices_re_js33.svg";

export function Hero() {
    return (

        <div className="py-10 items-center flex flex-col gap-12 ">
            <h1 className="text-8xl text-gray-600 flex flex-col items-center gap-4">
                <span>All things finance,</span>
                <span>right there.</span>
            </h1>
            <h2 className="text-2xl text-gray-600">Built for shrinkking Patience</h2>
            <button className="p-4 rounded-md text-white bg-primary font-semibold">Get Started</button>
            <Image src={heroImage} alt="hero image" className="size-96"/>
        </div>
    )
}
