import StatCard from "@/components/ui/StatCard";

export default function SuperAdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-primary-foreground">Super Admin Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Total Academies" value="32" />
        <StatCard title="Active Subscriptions" value="28" />
        <StatCard title="Revenue" value="₹2,40,000" />
        <StatCard title="Trials" value="6" />
      </div>
    </div>
  );
}
