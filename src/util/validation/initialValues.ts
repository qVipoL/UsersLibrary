import { IUser } from "src/common/interfaces";
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

export const initFromUser = (user: IUser) => ({
  [firstName.name]: user.name.first,
  [lastName.name]: user.name.last,
  [email.name]: user.email,
  [city.name]: user.location.city,
  [country.name]: user.location.country,
  [streetName.name]: user.location.street.name,
  [streetNumber.name]: user.location.street.number,
});

export default initialValues;
