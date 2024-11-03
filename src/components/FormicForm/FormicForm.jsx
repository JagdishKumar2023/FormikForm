import "./FormicForm.css";
import { Field, Form, Formik } from "formik";
import { signupSchema } from "../../Schemas"; // Adjust the import paths as necessary
import { Link } from "react-router-dom"; // Import Link

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
  gender: "",
};

const FormicForm = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className="mainContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="signupForm">
            <h1>Sign Up</h1>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <div className="errorContainer">
              {errors.name && touched.name && (
                <p className="formError">{errors.name}</p>
              )}
            </div>

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

            <label htmlFor="cpassword">Confirm Password</label>
            <Field type="password" name="cpassword" />
            <div className="errorContainer">
              {errors.cpassword && touched.cpassword && (
                <p className="formError">{errors.cpassword}</p>
              )}
            </div>

            <label htmlFor="gender">Gender</label>
            <Field as="select" name="gender">
              <option value="" label="Select gender" />
              <option value="male" label="Male" />
              <option value="female" label="Female" />
              <option value="other" label="Other" />
            </Field>

            <div className="errorContainer">
              {errors.gender && touched.gender && (
                <p className="formError">{errors.gender}</p>
              )}
            </div>

            <button type="submit">Submit</button>
            <p className="paragraph">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormicForm;
