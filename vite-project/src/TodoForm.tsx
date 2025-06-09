import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
const schema = z.object({
  work: z.string().min(3).max(30),
  day: z.string().min(3).max(30),
  time: z.string().min(3).max(30),
});

type TodoData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: TodoData) => void;
}

const TodoForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<TodoData>({
    resolver: zodResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className="form-group">
        <label htmlFor="">Work:</label>
        <input {...register("work")} type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Day:</label>
        <input {...register("day")} type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Time:</label>
        <input {...register("time")} type="text" className="form-control" />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
