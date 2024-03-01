import { getMembers } from "@/actions/members";
import { fetchFilteredMembers } from "@/actions/search/action";
import Table from "@/components/admin/members/members-table";
import Search from "@/components/admin/members/search";
import AdminTitle from "@/components/admin/title";

export default async function AdminMembers({
    searchParams,
}: {
    searchParams: {
        query?: string;
        page?: string;
    }
}) {

    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    const { filteredMembers, count } = await fetchFilteredMembers(query, currentPage)

    const members = await getMembers()

    

    return (
        <div className="min-h-screen px-6 py-5 flex flex-col gap-8 items-center">
            <AdminTitle name="Membros" />
            <Search />
            <Table members={filteredMembers} count={count} />
        </div>
    )
}