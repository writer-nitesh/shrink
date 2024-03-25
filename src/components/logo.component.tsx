import Image from "next/image";
import logoImage from "../assets/images/shrink-logo.png";

export function Logo() {
    return <Image src={logoImage} alt="shrink-logo" className="h-10 w-10" />
}