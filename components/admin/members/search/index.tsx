'use client'

import { SearchIcon, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {

    const searchParams = useSearchParams()
    const router = useRouter()
    const [searchTerm, setSearchTerm] =  useState<string | ''>(searchParams.get('query') || '')

    const handleSearch = (query: string) => {
        if(!query) {
            return
        }

        const params = new URLSearchParams();
        params.set('query', query)
        router.replace(`/admin/members/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }

    useEffect(() =>{
        setSearchTerm(searchParams.get('query') || '')
    }, [searchParams])

    return (
        <form onSubmit={handleSubmit} className="w-10/12" autoComplete="off">
            <div className="bg-secondarycolor w-full flex h-[30px] items-center">
                <SearchIcon className="p-1"/>
                <input
                    type="text"
                    placeholder="Pesquisa"
                    className="bg-secondarycolor w-full placeholder-black pl-1"
                    onChange ={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <Link href={'/admin/members'}>
                    <X className="p-1" />
                </Link>
            </div>
        </form>
    )
}