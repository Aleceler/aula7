import { Formik } from "formik";
import { validationSchema } from "./validation.ts";

const FormikExample = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          alert(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          handleSubmit,
          handleBlur,
          handleChange,
          touched,
        }) => (
          <form
            className="flex justify-center flex-col items-center h-96"
            onSubmit={handleSubmit}
          >
            <input
              className="border border-b-gray-500 p-1 my-2 rounded min-w-60"
              type="text"
              name="name"
              placeholder="Insira o nome"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && (
              <div className="text-left min-w-60 text-red-500 text-sm">
                {errors.name}
              </div>
            )}
            <input
              className="border border-b-gray-500 p-1 my-2 rounded min-w-60"
              type="email"
              name="email"
              placeholder="Insira o email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <div className="text-left min-w-60 text-red-500 text-sm">
                {errors.email}
              </div>
            )}
            <input
              className="border border-b-gray-500 p-1 my-2 rounded min-w-60"
              type="password"
              name="password"
              placeholder="Insira a senha"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && (
              <div className="text-left min-w-60 text-red-500 text-sm">
                {errors.password}
              </div>
            )}
            <input
              className="border border-b-gray-500 p-1 my-2 rounded min-w-60 "
              type="password"
              name="confirmPassword"
              placeholder="Confirme a senha"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="text-left min-w-60 text-red-500 text-sm">
                {errors.confirmPassword}
              </div>
            )}

            <button className="bg-blue-400 p-1 my-2 text-white font-bold rounded min-w-60">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikExample;
