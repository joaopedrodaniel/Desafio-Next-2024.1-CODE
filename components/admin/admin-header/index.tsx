'use client'

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const links = [
    {href: '/', label: 'Home'},
    {href: '/admin', label: 'Dashboard'},
    {href: '/admin/members', label: 'Membros'},
    {href: '/management', label: 'Gerenciamento'},
    {href: '/', label: 'Sair'}
]

export default function AdminHeader () {

    const [isNavigationOpen, setIsNavigationOpen] = useState(false)

    const toggleNavigation = () => setIsNavigationOpen(!isNavigationOpen)

    return (
        <header className="bg-primarycolor sticky top-0 mx-auto w-full flex py-4 px-6">
            <div className="flex w-full items-center justify-between flex-wrap mx-auto">
                <Link href={'/'} className="flex items-center uppercase font-bold text-xl 2xl:text-2xl">
                    Guitar Tone
                </Link>
                <div>
                    <div className="md:hidden">
                        { isNavigationOpen ?
                            <X
                                onClick={toggleNavigation}
                                className="w-10 h-10 text-black cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                            />
                            :
                            <Menu
                                onClick={toggleNavigation}
                                className="w-10 h-10 text-black cursor-pointer"
                            />
                        }                    
                    </div>
                    <div className="hidden md:flex gap-8">
                        {links.map((link, index) => 
                            <Link href={link.href} key={index}>
                                <span className="text-xl text-black uppercase 2xl:text-2xl">
                                    {link.label}
                                </span>
                            </Link>
                        )}
                    </div>   
                </div>
            
                    { isNavigationOpen && (
                        <div className="md:hidden flex basis-full flex-col items-center gap-7 mt-5">
                            {links.map((link, index) =>
                                <Link href={link.href} key={index} onClick={toggleNavigation}>
                                    <span className="text-xl text-black uppercase">
                                        {link.label}
                                    </span>
                                </Link>
                            )}
                        </div>
                    )}
            </div>    
        </header>
    )
}