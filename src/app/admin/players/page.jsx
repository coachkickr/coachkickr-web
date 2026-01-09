import Table from "@/components/ui/Table";

export default function PlayersPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Players</h1>
      <Table
        headers={["Name", "Batch", "Coach", "Fee Status"]}
        rows={[
          ["Aman", "Morning", "Rahul", "Pending"],
        ]}
      />
    </div>
  );
}
