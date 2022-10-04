import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "src/common/interfaces";
import Wrapper from "src/components/layout/Wrapper";
import { StoreType } from "src/store";
import { getUsersAndDispatch } from "src/store/actions/userActions";
import UsersList from "../../components/organisms/Lists/UsersList";

const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector((store: StoreType) => store.userStore);
  const [usersState, setUsersState] = useState<IUser[]>(users);

  useEffect(() => {
    setTimeout(() => getUsersAndDispatch(dispatch), 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUsersState(users);
  }, [users]);

  return (
    <Wrapper>
      {usersState.length > 0 ? (
        <UsersList users={usersState} />
      ) : (
        <CircularProgress />
      )}
    </Wrapper>
  );
};

export default HomePage;
