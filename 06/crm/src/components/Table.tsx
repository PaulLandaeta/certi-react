import React from "react";

const Table = ({ clients, onEdit, onDelete }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Last Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Company
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {clients.map((client) => (
          <tr key={client.id}>
            <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{client.lastName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{client.company}</td>
            <td className="px-6 py-4 whitespace-nowrap">
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
