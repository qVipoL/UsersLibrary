import { Box } from "@mui/material";
import React, { FC } from "react";
import { IUser } from "src/common/interfaces";
import UserCard from "src/components/atoms/Cards/UserCard";
import styles from "./styles";

interface IUsersListProps {
  users: IUser[];
}

const UsersList: FC<IUsersListProps> = ({ users }) => {
  return (
    <Box sx={styles.usersList}>
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </Box>
  );
};

export default UsersList;
