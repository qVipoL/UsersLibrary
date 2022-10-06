import React, { useEffect } from "react";
import Wrapper from "src/components/layout/Wrapper";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { fetchUsers } from "src/store/slices/userSlice";
import UsersList from "../../components/organisms/Lists/UsersList";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Wrapper>
      {isLoading ? (
        <>Loading</>
      ) : error ? (
        <>error</>
      ) : (
        <UsersList users={users} />
      )}
    </Wrapper>
  );
};

export default HomePage;
