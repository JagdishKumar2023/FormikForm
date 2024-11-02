import "./FormicForm.css";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
  gender: "",
};

const FormicForm = () => {
  // Correctly destructure the returned object from useFormik
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mainContainer">
      <form className="signupForm" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="name">Name</label>
        <input
          className="fromInput"
          type="text"
          value={values.name}
          name="name"
          id="name"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label htmlFor="email">Email</label>
        <input
          className="fromInput"
          type="email"
          name="email"
          value={values.email}
          id="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label htmlFor="password">Password</label>
        <input
          className="fromInput"
          type="password"
          name="password"
          value={values.password}
          id="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label htmlFor="cpassword">Confirm Password</label>
        <input
          className="fromInput"
          type="password"
          name="cpassword"
          value={values.cpassword}
          id="cpassword"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label htmlFor="gender">Gender</label>
        <input
          className="fromInput"
          type="text"
          name="gender"
          id="gender"
          value={values.gender}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button type="submit">Submit</button>

        <p className="paragraph">
          Already have an account? <a href="">Login</a>
        </p>
      </form>
    </div>
  );
};

export default FormicForm;
