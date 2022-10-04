import React, { FC } from "react";
import { Box, Fade, Grid, IconButton, Typography, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles";
import Button from "@mui/material/Button";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import {
  formModel,
  initFromUser,
  initialValues,
  validationSchema,
} from "src/util";
import EditUserForm from "../../Forms/EditUserForm";
import { IUser } from "src/common/interfaces";
import { StoreType } from "src/store";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "src/store/actions/userActions";
import { v4 } from "uuid";

interface IEditModalProps {
  open: boolean;
  onClose: any;
  user?: IUser;
  title?: string;
}

const EditModal: FC<IEditModalProps> = ({ open, onClose, user, title }) => {
  const users = useSelector((store: StoreType) => store.userStore);
  const dispatch = useDispatch();

  const submitForm = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    const emailsExists =
      values.email !== user?.email &&
      users.findIndex((u) => u.email === values.email) > -1;

    if (emailsExists) {
      actions.setErrors({ email: "Email already exists" });
      return;
    }

    actions.setTouched({});
    actions.setSubmitting(false);
    updateUser(dispatch, users, {
      id: user?.login.uuid || v4(),
      email: values.email,
      city: values.city,
      country: values.country,
      streetName: values.streetName,
      streetNumber: values.streetNumber,
      firstName: values.firstname,
      lastName: values.lastName,
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <>
        <Fade in={open} timeout={300}>
          <Box sx={styles.modal}>
            <Grid container sx={styles.innerContainer}>
              <Grid bgcolor={"#191a19"} item py={3} xs={12}>
                <Typography
                  variant={"h4"}
                  component={"h5"}
                  color={"white"}
                  fontWeight={500}
                >
                  {title}
                </Typography>
                <IconButton onClick={onClose} sx={styles.icon}>
                  <CloseIcon sx={{ color: "white" }} />
                </IconButton>
              </Grid>
              <Grid item xs={12} mt={1}>
                <Formik
                  initialValues={user ? initFromUser(user) : initialValues}
                  validationSchema={validationSchema.editUserForm}
                  onSubmit={submitForm}
                >
                  <Form>
                    <EditUserForm formFields={formModel.formFields} />
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ mr: 5, px: 3 }}
                      color={"success"}
                    >
                      SAVE
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ px: 1.5 }}
                      onClick={onClose}
                    >
                      CANCEL
                    </Button>
                  </Form>
                </Formik>
              </Grid>
              <Grid item xs={12} mb={4}></Grid>
            </Grid>
          </Box>
        </Fade>
      </>
    </Modal>
  );
};

export default EditModal;
