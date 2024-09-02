import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation.ts";

const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <form
        className="flex justify-center flex-col items-center h-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border border-b-gray-500 p-1 my-2 rounded min-w-60"
          type="text"
          {...register("name")}
          placeholder="Insira o nome"
        />
        {errors.name && (
          <div className="text-left min-w-60 text-red-500 text-sm">
            {errors.name.message}
          </div>
        )}

        <input
          className="border border-b-gray-500 p-1 my-2 rounded min-w-60"
          type="email"
          {...register("email")}
          placeholder="Insira o email"
        />
        {errors.email && (
          <div className="text-left min-w-60 text-red-500 text-sm">
            {errors.email.message}
          </div>
        )}

        <input
          className="border border-b-gray-500 p-1 my-2 rounded min-w-60"
          type="password"
          {...register("password")}
          placeholder="Insira a senha"
        />
        {errors.password && (
          <div className="text-left min-w-60 text-red-500 text-sm">
            {errors.password.message}
          </div>
        )}

        <input
          className="border border-b-gray-500 p-1 my-2 rounded min-w-60"
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirme a senha"
        />
        {errors.confirmPassword && (
          <div className="text-left min-w-60 text-red-500 text-sm">
            {errors.confirmPassword.message}
          </div>
        )}

        <button className="bg-blue-400 p-1 my-2 text-white font-bold rounded min-w-60">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormExample;
