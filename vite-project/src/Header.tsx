import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: Number;
}

const Header = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label htmlFor="">Name:</label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
        />
      </div>
      {errors.name?.type === "required" && <p>The name field is required</p>}
      {errors.name?.type === "minLength" && <p>type gearter tahn three character</p>}

      <label htmlFor="">Age:</label>
      <input {...register("age")} type="text" />
      <button>submit</button>
    </form>
  );
};

export default Header;
