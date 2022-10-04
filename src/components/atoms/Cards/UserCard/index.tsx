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
import { deleteUser } from "src/store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "src/store";
import DeleteModal from "src/components/organisms/Modals/DeleteModal";

interface ICardProps {
  user: IUser;
}

const UserCard: FC<ICardProps> = ({ user }) => {
  const dispatch = useDispatch();
  const users = useSelector((store: StoreType) => store.userStore);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const deleteHandler = () => {
    deleteUser(dispatch, users, user.login.uuid);
  };

  return (
    <Card sx={styles.card} variant={"outlined"}>
      <CardHeader
        avatar={<Avatar sx={styles.avatar} src={user.picture.medium} />}
        action={
          <IconButton>
            <DeleteIcon
              color="error"
              onClick={() => setDeleteModalOpen(true)}
            />
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
        <Button variant="outlined" sx={styles.cardButton}>
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
    </Card>
  );
};

export default UserCard;
