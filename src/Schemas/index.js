import * as Yup from "yup";

const passwordRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);

export const signupSchema = Yup.object({
  name: Yup.string().min(3).required("Please enter your name"),
  email: Yup.string()
    .min(5)
    .email("Please enter vaild email")
    .required("Please enter your email"),
  password: Yup.string()
    .matches(passwordRegex, "Please enter your email")
    .required("Please enter your password"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password do not match!")
    .required("Please enter confirm password"),
});
