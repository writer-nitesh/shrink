import { Logo } from './logo.component'

export function LogoName() {
    return (
        <a href='/' className="flex gap-2 items-center">
            <Logo />
            <h1 className="capitalize text-2xl font-semibold">shrinkk</h1>
        </a>
    )
}
