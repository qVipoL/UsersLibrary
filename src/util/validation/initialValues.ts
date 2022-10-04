import formModel from "./formModel";

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

const initialValues = {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [city.name]: "",
  [country.name]: "",
  [streetName.name]: "",
  [streetNumber.name]: "",
};

export default initialValues;
