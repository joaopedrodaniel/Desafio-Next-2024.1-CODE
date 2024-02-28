import ManagementPage from "@/components/admin/management";
import AdminTitle from "@/components/admin/title";

export default function management() {
    return(
        <div className="min-h-screen px-6 py-5 flex flex-col gap-8 items-center">
            <AdminTitle name="Gerenciamento" />
            <ManagementPage />
        </div>
    )
}