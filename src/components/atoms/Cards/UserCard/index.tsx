import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { IUser } from "src/common/interfaces";
import styles from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "src/components/organisms/Modals/DeleteModal";
import EditModal from "src/components/organisms/Modals/EditModal";
import { userActions } from "src/store/slices/userSlice";
import { useAppDispatch } from "src/hooks/redux";

interface ICardProps {
  user: IUser;
}

const UserCard: FC<ICardProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);

  const deleteHandler = () => {
    dispatch(userActions.deleteUser(user.login.uuid));
  };

  return (
    <Card sx={styles.card} variant={"outlined"}>
      <CardHeader
        avatar={<Avatar sx={styles.avatar} src={user.picture.medium} />}
        action={
          <IconButton onClick={() => setDeleteModalOpen(true)}>
            <DeleteIcon color="error" />
          </IconButton>
        }
      />
      <CardContent sx={styles.cardContent}>
        <Typography variant="body1" sx={styles.cardTitle}>
          {`${user.name.title} ${user.name.first} ${user.name.last}`}
        </Typography>
        <Typography variant="body1" sx={styles.cardSubtitle}>
          {user.email}
        </Typography>
        <Typography component={"p"} variant="body2" sx={styles.cardBody}>
          {`${user.location.country}, ${user.location.city}`} <br />
          {`${user.location.street.name}, ${user.location.street.number}`}
        </Typography>
        <Typography variant="body2" sx={styles.cardFooter}>
          {user.login.uuid}
        </Typography>
        <Button
          variant="outlined"
          sx={styles.cardButton}
          onClick={() => setEditModalOpen(true)}
        >
          Edit
        </Button>
      </CardContent>

      {isDeleteModalOpen && (
        <DeleteModal
          open={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={deleteHandler}
        />
      )}

      {isEditModalOpen && (
        <EditModal
          open={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          user={user}
          title="Edit User"
        />
      )}
    </Card>
  );
};

export default UserCard;
