import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex flex-col flex-1 bg-[#EDEDED]">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
