import React from "react";

const Table = ({ clients, onEdit, onDelete }) => {
  return (
    <table className="w-full bg-white shadow mt-5 table-auto">
      <thead className="bg-blue-800 text-white">
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">Last Name</th>
          <th className="p-2">Company</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {clients.map((client) => (
          <tr key={client.id}>
            <td className="text-center px-6 py-4 whitespace-nowrap">{client.name}</td>
            <td className="text-center px-6 py-4 whitespace-nowrap">{client.lastName}</td>
            <td className="text-center px-6 py-4 whitespace-nowrap">{client.company}</td>
            <td className="text-center px-6 py-4 whitespace-nowrap">
              <button
                className="text-indigo-600 hover:text-indigo-900"
                onClick={() => onEdit(client)}
              >
                Edit
              </button>
              <button
                className="text-red-600 hover:text-red-900 ml-2"
                onClick={() => onDelete(client)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
