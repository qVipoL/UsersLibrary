const formModel = {
  formFields: {
    firstName: {
      name: "firstname",
      label: "First name*",
      lengthError: "Should be at least 3 characters",
      requiredErrorMsg: "First name is required",
    },
    lastName: {
      name: "lastName",
      label: "Last name*",
      lengthError: "Should be at least 3 characters",
      requiredErrorMsg: "Last name is required",
    },
    email: {
      name: "email",
      label: "Email*",
      emailError: "Should be a valid email",
      requiredErrorMsg: "Email is required",
    },
    city: {
      name: "city",
      label: "City*",
      requiredErrorMsg: "City is required",
    },
    country: {
      name: "country",
      label: "Country*",
      requiredErrorMsg: "Country is required",
    },
    streetName: {
      name: "streetName",
      label: "Street name*",
      requiredErrorMsg: "Street name is required",
    },
    streetNumber: {
      name: "streetNumber",
      label: "Street number*",
      requiredErrorMsg: "Street number is required",
    },
  },
};

export default formModel;
