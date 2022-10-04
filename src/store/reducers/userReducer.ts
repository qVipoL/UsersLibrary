import { IUser } from "src/common/interfaces";
import {
  FETCH_USERS_ACTION,
  UPDATE_USERS_ACTION,
} from "../actions/userActions";

const USER_STATE: IUser[] = [];

const userReducer = (
  state = USER_STATE,
  action: { type: string; payload: IUser[] }
) => {
  switch (action.type) {
    case FETCH_USERS_ACTION:
      return [...action.payload];
    case UPDATE_USERS_ACTION:
      return [...action.payload];
    default:
      return state;
  }
};

export default userReducer;
