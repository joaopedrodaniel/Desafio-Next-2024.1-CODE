import { SearchIcon } from "lucide-react";

export default function Search() {
    return (
        <div className="bg-secondarycolor w-10/12 flex h-[30px] items-center">
            <SearchIcon className="p-1"/>
            <input
                type="text"
                placeholder="Pesquisa"
                className="bg-secondarycolor w-full placeholder-black pl-1"
            />
        </div>
    )
}