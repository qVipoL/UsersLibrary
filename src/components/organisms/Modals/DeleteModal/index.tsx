import React, { FC } from "react";
import { Box, Fade, Grid, IconButton, Typography, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles";
import Button from "@mui/material/Button";

interface IDeleteModalProps {
  open: boolean;
  onClose: any;
  onConfirm: any;
}

const DeleteModal: FC<IDeleteModalProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <>
        <Fade in={open} timeout={300}>
          <Box sx={styles.modal}>
            <Grid container sx={styles.innerContainer}>
              <Grid item mt={3} xs={12}>
                <Typography
                  variant={"h4"}
                  component={"h5"}
                  color={"black"}
                  fontWeight={500}
                >
                  Confirmation
                </Typography>
                <IconButton onClick={onClose} sx={styles.icon}>
                  <CloseIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} mt={1}>
                <Typography>Are you sure you want to delete?</Typography>
              </Grid>
              <Grid item xs={12} mt={3}>
                <Button
                  variant="contained"
                  sx={{ mr: 5 }}
                  color={"error"}
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                >
                  DELETE
                </Button>
                <Button variant="contained" onClick={onClose}>
                  CANCEL
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </>
    </Modal>
  );
};

export default DeleteModal;
