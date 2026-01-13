import Table from "@/components/ui/Table";

export default function CoachesPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Coaches</h1>
      <Table
        headers={["Name", "Email", "Category", "Status"]}
        rows={[
          ["Rahul", "rahul@ck.com", "Football", "Active"],
        ]}
      />
    </div>
  );
}
