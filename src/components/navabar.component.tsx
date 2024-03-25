'use client'
import Link from "next/link";
import { Logo } from "./logo.component";
import { LogoName } from "./logoName.component";
import { Search } from "./search.component";
import { useAppData } from "@/context/context";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";

export function Navbar() {

    const { data, setData } = useAppData();
    const { user } = data
    const [currentPath, setCurrentPath] = useState<string>("")

    const router = useRouter()
    const pathname = usePathname()



    const handleLogin = () => {
        setData(prevData => ({
            ...prevData,
            user: "true"
        }));
        window.localStorage.setItem("user", "true")
        router.push("/explore")

    };

    const handleLogOut = () => {
        setData(prevData => ({
            ...prevData,
            user: "false"
        }));
        window.localStorage.setItem("user", "false")
        router.push("/")
    };



    useEffect(() => {
        if (pathname) {
            setCurrentPath(pathname.split("/").pop() || "")
        }
    }, [pathname])



    return (
        <div className="flex w-full  py-4 justify-evenly ">
            <div className="flex justify-center items-center gap-4">
                <LogoName />
                {
                    user == "true" && <>
                        <Link className={`${currentPath == "explore" && "text-negative"}   `} href="/explore" >Explore</Link>
                        <Link className={`${currentPath == "investments" && "text-negative"}   `} href="/investments" >Investments</Link>
                    </>
                }
            </div>
            <Search />
            {
                user == "true"
                    ?
                    <button onClick={handleLogOut} className="text-[10px] font-semibold" type="button">Log Out</button>
                    :
                    <button onClick={handleLogin} className="text-[10px] font-semibold" type="button">Login/Register</button>
            }
        </div >
    )
}
