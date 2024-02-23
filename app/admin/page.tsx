import DeashboardButton from "@/components/admin/dashboard/dashboard-button";

export default function Admin() {
    return (
      <div className='min-h-screen px-6 py-5'>
      
        <div className="flex gap-8">
          <DeashboardButton name="Visualizar" description="Membros" href="/admin/members" />
          <DeashboardButton name="Gerenciar" description="Membros" href="/admin/management" />
        </div>
      </div>
    )
  }
  