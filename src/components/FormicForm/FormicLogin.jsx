import "./FormicForm.css";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom"; // Import Link

const initialValues = {
  email: "",
  password: "",
};

const FormicLogin = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    // Handle login logic here, e.g., make API call
    actions.resetForm();
  };

  return (
    <div className="mainContainer">
      <Formik
        initialValues={initialValues}
        // validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="signupForm">
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <div className="errorContainer">
              {errors.email && touched.email && (
                <p className="formError">{errors.email}</p>
              )}
            </div>

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <div className="errorContainer">
              {errors.password && touched.password && (
                <p className="formError">{errors.password}</p>
              )}
            </div>

            <button type="submit">Login</button>
            <p className="paragraph">
              Dont have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormicLogin;
