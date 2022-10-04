import formModel from "./formModel";
import * as yup from "yup";

const {
  formFields: {
    firstName,
    lastName,
    email,
    city,
    country,
    streetName,
    streetNumber,
  },
} = formModel;

const validationSchema = {
  editUserForm: yup.object().shape({
    [firstName.name]: yup
      .string()
      .min(3, firstName.lengthError)
      .required(firstName.requiredErrorMsg),
    [lastName.name]: yup
      .string()
      .min(3, lastName.lengthError)
      .required(lastName.requiredErrorMsg),
    [email.name]: yup
      .string()
      .email(email.emailError)
      .required(email.requiredErrorMsg),
    [city.name]: yup.string().required(city.requiredErrorMsg),
    [country.name]: yup.string().required(country.requiredErrorMsg),
    [streetName.name]: yup.string().required(streetName.requiredErrorMsg),
    [streetNumber.name]: yup.string().required(streetNumber.requiredErrorMsg),
  }),
};

export default validationSchema;
