import getMembers from "@/actions/members";
import Table from "@/components/admin/members/members-table";
import Search from "@/components/admin/members/search";
import AdminTitle from "@/components/admin/title";

export default async function AdminMembers() {

    const members = await getMembers()

    return (
        <div className="min-h-screen px-6 py-5 flex flex-col gap-8 items-center">
            <AdminTitle name="Membros" />
            <Search />
            <Table members={members} />
        </div>
    )
}