import * as yup from "yup";

export let signupSchema = yup.object().shape({
  username: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Password do not match")
    .min(6, "Password must be at least 6 characters")
    .required("Password confirm is required"),
});

export let signinSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export let messageSchema = yup.object().shape({
  message: yup.string().required(),
});
