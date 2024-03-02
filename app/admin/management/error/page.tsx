import Error from "@/components/admin/crud/error";
import AdminTitle from "@/components/admin/title";


export default function ErrorPage() {
    return (
        <div className="w-full space-y-12 flex flex-col items-center min-h-screen">
            <AdminTitle name="" />
            <Error />
        </div>
    )
}