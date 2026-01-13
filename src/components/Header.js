export default function Header() {
  return (
    <header className="h-16 bg-[#EDEDED] border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-[#324054]">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          admin@coachkickr.com
        </span>

        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
}
