import { useState } from "react";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const handleCheck = (index) => {
    // Lógica para marcar como completado el elemento en la posición "index" del arreglo "todos"
  };

  const handleDelete = (index) => {
    // Crear una copia del arreglo todos
    const updatedTodos = [...todos];

    // Remover el elemento en la posición index
    updatedTodos.splice(index, 1);

    // Actualizar el estado con el nuevo arreglo sin el elemento eliminado
    setTodos(updatedTodos);
  };
  return (
    <div className="w-1/3 mx-auto">
      <Task
        title="Tarea 1"
        onCheck={() => handleCheck(1)}
        onDelete={() => handleDelete(1)}
      />
    </div>
  );
}

export default App;
