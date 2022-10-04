import React, { FC, useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import styles from "./styles";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import UsersService, { USER_FILTERS } from "src/services/UsersService";
import { useSelector } from "react-redux";
import { StoreType } from "src/store";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IUsersSearchProps {
  setUsers: Function;
}

const UsersSearch: FC<IUsersSearchProps> = ({ setUsers }) => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<USER_FILTERS>(USER_FILTERS.ID);
  const users = useSelector((store: StoreType) => store.userStore);

  const mobile = useMediaQuery("(max-width:330px)");

  const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filterChange = (event: any) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    setUsers(UsersService.filterUsers(users, filter, search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Box>
      <Box sx={styles.inputContainer}>
        <TextField
          label="Search"
          sx={{ bgcolor: "white" }}
          onChange={searchChange}
        />
      </Box>
      <Box sx={styles.inputContainer}>
        <FormControl>
          <RadioGroup
            defaultValue={USER_FILTERS.ID}
            row={mobile ? false : true}
            onChange={filterChange}
          >
            <FormControlLabel
              value={USER_FILTERS.ID}
              control={<Radio size="small" />}
              label="ID"
            />
            <FormControlLabel
              value={USER_FILTERS.NAME}
              control={<Radio size="small" />}
              label="Name"
            />
            <FormControlLabel
              value={USER_FILTERS.EMAIL}
              control={<Radio size="small" />}
              label="Email"
            />
            <FormControlLabel
              value={USER_FILTERS.LOCATION}
              control={<Radio size="small" />}
              label="Location"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default UsersSearch;
