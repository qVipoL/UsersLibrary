import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { FC, useState } from "react";
import { IUser } from "src/common/interfaces";
import UserCard from "src/components/atoms/Cards/UserCard";
import styles from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditModal from "../../Modals/EditModal";
import UsersSearch from "../../UsersSearch";

interface IUsersListProps {
  users: IUser[];
  setUsers: Function;
}

const UsersList: FC<IUsersListProps> = ({ users, setUsers }) => {
  const [isCreateUserModalOpen, setCreateUserModalOpen] =
    useState<boolean>(false);

  return (
    <>
      <UsersSearch setUsers={setUsers} />
      <Box sx={styles.addNew}>
        <IconButton size="large" onClick={() => setCreateUserModalOpen(true)}>
          <PersonAddIcon fontSize="large" color="primary" />
        </IconButton>
      </Box>
      <Box sx={styles.usersList}>
        {users.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </Box>

      {isCreateUserModalOpen && (
        <EditModal
          open={isCreateUserModalOpen}
          onClose={() => setCreateUserModalOpen(false)}
          title="Create User"
        />
      )}
    </>
  );
};

export default UsersList;
