import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (

        <nav className="flex justify-between items-center bg-white p-4 rounded-md">
            <Link href="/" className="flex items-center">
                <img src="/next.svg" alt="Logo" className="w-16 h-16" />
                <span className="ml-4 text-lg font-bold">aiGen</span>
            </Link>
            <ul className="hidden lg:flex flex-row items-center gap-4">
                <li>
                    <Link className="text-base font-medium" href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="text-base font-medium" href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="text-base font-medium" href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
            <button className="block lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </nav>

    )
}

export default Navbar