export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="dashboard-container">
        <aside>Sidebar</aside>
        <main>{children}</main>
      </div>
    );
  }