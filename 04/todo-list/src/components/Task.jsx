const Task = ({ title, onCheck, onDelete }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="flex justify-end">
        <button
          className="px-2 py-1 bg-green-500 text-white rounded mr-2"
          onClick={onCheck}
        >
          Check
        </button>
        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={onDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Task;
