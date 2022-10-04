import Grid from "@mui/material/Grid/Grid";
import { FormikValues } from "formik";
import React, { FC } from "react";
import { InputField } from "src/components/atoms/FormFields/InputField";

interface IEditUserFormProps {
  formFields: FormikValues;
}

const EditUserForm: FC<IEditUserFormProps> = (props) => {
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
  } = props;

  return (
    <Grid container spacing={2} px={2} py={2}>
      <Grid item xs={12}>
        <InputField
          defaultProps={{
            name: firstName.name,
            label: firstName.label,
            fullWidth: true,
            variant: "standard",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          defaultProps={{
            name: lastName.name,
            label: lastName.label,
            fullWidth: true,
            variant: "standard",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          defaultProps={{
            name: email.name,
            label: email.label,
            fullWidth: true,
            variant: "standard",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          defaultProps={{
            name: city.name,
            label: city.label,
            fullWidth: true,
            variant: "standard",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          defaultProps={{
            name: country.name,
            label: country.label,
            fullWidth: true,
            variant: "standard",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          defaultProps={{
            name: streetName.name,
            label: streetName.label,
            fullWidth: true,
            variant: "standard",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          defaultProps={{
            name: streetNumber.name,
            label: streetNumber.label,
            fullWidth: true,
            variant: "standard",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default EditUserForm;
