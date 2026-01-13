import Link from "next/link";

const menu = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Players", path: "/admin/players" },
  { name: "Coaches", path: "/admin/coaches" },
  { name: "Batches", path: "/admin/batches" },
  { name: "Fees", path: "/admin/fees" },
  { name: "Attendance", path: "/admin/attendance" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white text-primary-foreground flex flex-col shadow-2xl">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center text-xl font-bold border-b border-white/20">
        CoachKickr
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="block rounded-lg px-4 py-2 hover:bg-[#1F91050D] transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 text-sm border-t border-white/20">
        © Elements {new Date().getFullYear()}
      </div>
    </aside>
  );
}
