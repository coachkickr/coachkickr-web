import StatCard from "@/components/ui/StatCard";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Players" value="120" />
        <StatCard title="Coaches" value="8" />
        <StatCard title="Pending Fees" value="₹45,000" />
        <StatCard title="Attendance %" value="82%" />
      </div>
    </div>
  );
}
