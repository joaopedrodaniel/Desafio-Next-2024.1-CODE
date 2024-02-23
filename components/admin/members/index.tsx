import Table from "./members-table";
import Search from "./search";

export default function Members() {
    return (
        <div className="flex flex-col gap-8 items-center">
            <h1 className="text-3xl uppercase pt-10">Membros</h1>
            <Search />
            <Table />
        </div>
    )
}