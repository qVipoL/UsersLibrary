import { IUpsertUser, IUser } from "src/common/interfaces";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_AVATAR } from "src/config";
import UsersService from "src/services/UsersService";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await UsersService.getUsers();
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    upsertUser(state, action: PayloadAction<IUpsertUser>) {
      const userIdx = state.users.findIndex((user) => {
        return user.login.uuid === action.payload.id;
      });
      const user = state.users[userIdx];

      const newUser: IUser = {
        name: {
          title: user?.name?.title || "",
          first: action.payload.firstName,
          last: action.payload.lastName,
        },
        location: {
          street: {
            number: action.payload.streetNumber,
            name: action.payload.streetName,
          },
          city: action.payload.city,
          country: action.payload.country,
        },
        email: action.payload.email,
        login: {
          uuid: action.payload.id,
        },
        picture: {
          medium: user?.picture?.medium || DEFAULT_AVATAR,
        },
      };

      if (user) {
        state.users[userIdx] = newUser;
      } else {
        state.users.push(newUser);
      }
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.users.splice(
        state.users.findIndex((user) => user.login.uuid === action.payload),
        1
      );
    },
  },
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { actions: userActions, reducer: userReducer } = userSlice;

export { userActions, userReducer };
