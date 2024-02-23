import AdminHeader from "@/components/admin/admin-header";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <AdminHeader />
            {children}
        </div>
    )
  }