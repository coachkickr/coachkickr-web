import Table from "@/components/ui/Table";

export default function AdminsPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Academy Admins</h1>
      <Table
        headers={["ID", "Academy", "Email", "Status"]}
        rows={[
          ["CK001", "Elite Academy", "admin@elite.com", "Active"],
        ]}
      />
    </div>
  );
}
