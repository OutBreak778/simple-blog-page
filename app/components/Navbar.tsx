import Link from "next/link";
import ThemeButton from "./ThemeComponents";

export default function Navbar() {
    return(
        <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-8">
            <div className="flex justify-between h-12">
                <div className="flex justify-between items-center w-full">
                    <Link href="/">
                        <h1 className="font-medium text-3xl leading-4">
                            Out<span className="text-teal-400">Break</span>
                        </h1>
                    </Link>
                    <ThemeButton />

                </div>
            </div>
        </div>
    )
}