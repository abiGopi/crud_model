import * as yup from "yup";
export const validationSchema = () =>
  yup.object().shape({
    firstName: yup.string().required("First name is mandatory"),
    email: yup
    .string()
    .email("Please enter valid Email-Id")
    .required("Email-ID is mandatory"),
    phoneNumber: yup.string()
    .trim()
    .matches(/^\d+$/,"Please enter a valid phone number")
    .max(12,"Enter Valid Phone Number")
    .required("E-mail is mandatory"),
    address1: yup.string().required("Address Line1 is mandatory"),
    qualification: yup.string().required("Qualification is mandatory"),
    comment: yup.string().required("Comment Line1 is mandatory"),
  });
