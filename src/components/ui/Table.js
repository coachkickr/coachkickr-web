export default function Table({ headers, rows }) {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full text-sm text-gray-700">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="p-2 text-left">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t-2">
              {row.map((cell, j) => (
                <td key={j} className="p-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
