import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";

const App = () => {
  const [isTodo, setTodo] = useState([
    { id: 1, work: "Cardio", day: "Monday", time: "5:30am" },
    { id: 2, work: "SkinCare", day: "Monday", time: "7:30am" },
    { id: 3, work: "Breakfast", day: "Monday", time: "8:30am" },
  ]);
  if (isTodo.length === 0) return null;
  return (
    <div>
      <TodoForm
        onSubmit={(data) =>
          setTodo([...isTodo, { ...data, id: isTodo.length + 1 }])
        }
      />
      <div className="mt-3">
        <TodoTable
          todos={isTodo}
          onDelete={(id) => setTodo(isTodo.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  );
};

export default App;
