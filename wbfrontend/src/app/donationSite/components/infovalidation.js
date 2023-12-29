import * as yup from "yup";

const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const infoValidation = yup.object({
  personName: yup.string().required("*Please enter your Person's name."),
  password: yup
    .string()
    .required("*Please enter a password")
    .min(8, "*Password must have at least 8 character")
    .matches(
      passwordRegExp,
      "*Password must contain an uppercase, lowercase, number and a special character"
    ),
});
