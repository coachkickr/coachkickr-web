import Table from "@/components/ui/Table";

export default function FeesPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Fees</h1>
      <Table
        headers={["Player", "Amount", "Due Date", "Status"]}
        rows={[
          ["Aman", "₹3000", "10 Feb", "Pending"],
        ]}
      />
    </div>
  );
}
