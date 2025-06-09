export interface Todos {
  id: number;
  work: string;
  day: string;
  time: string;
}

interface Props {
  todos: Todos[];
  onDelete: (id: number) => void;
}
const TodoTable = ({ todos, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Work</th>
          <th>Day</th>
          <th>Time</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.work}</td>
            <td>{todo.day}</td>
            <td>{todo.time}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(todo.id)}
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

export default TodoTable;
