export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-sm text-gray-800">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
