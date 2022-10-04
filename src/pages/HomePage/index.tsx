import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "src/common/interfaces";
import Wrapper from "src/components/layout/Wrapper";
import { StoreType } from "src/store";
import { getUsersAndDispatch } from "src/store/actions/userActions";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => getUsersAndDispatch(dispatch), 3000);
  }, []);

  const users = useSelector((store: StoreType) => store.userStore);
  const [userState, setUserState] = useState<IUser[]>(users);

  useEffect(() => {
    setUserState(users);
  }, [users]);

  return (
    <Wrapper>
      {userState.length > 0 ? <>{"hello"}</> : <CircularProgress />}
    </Wrapper>
  );
};

export default HomePage;
