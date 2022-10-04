import { Dispatch } from "redux";
import { IUpdateUser, IUser } from "src/common/interfaces";
import { DEFAULT_AVATAR } from "src/config";
import UsersService from "src/services/UsersService";

export const FETCH_USERS_ACTION = "FETCH_USERS_ACTION";
export const UPDATE_USERS_ACTION = "UPDATE_USERS_ACTION";

export const getUsersAndDispatch = async (dispatch: Dispatch) => {
  try {
    const result = await UsersService.getUsers();

    dispatch({ type: FETCH_USERS_ACTION, payload: result.data.results });
  } catch (error) {
    console.log(error);
  }
};

export const updateUsers = (
  dispatch: Dispatch,
  users: IUser[],
  update: IUpdateUser
) => {
  let user = users.find((user) => user.login.uuid === update.id);

  if (user) {
    user.email = update.email;
    user.location = {
      street: {
        number: update.streetNumber,
        name: update.streetName,
      },
      city: update.city,
      country: update.country,
    };
    user.name.first = update.firstName;
    user.name.last = update.lastName;
    user.login.uuid = update.id;
    user.picture.medium = user.picture.medium || DEFAULT_AVATAR;
    dispatch({ type: UPDATE_USERS_ACTION, payload: users });
  } else {
    user = {
      name: {
        title: "Mr.",
        first: update.firstName,
        last: update.lastName,
      },
      location: {
        street: {
          number: update.streetNumber,
          name: update.streetName,
        },
        city: update.city,
        country: update.country,
      },
      email: update.email,
      login: {
        uuid: update.id,
      },
      picture: {
        medium: DEFAULT_AVATAR,
      },
    };

    dispatch({ type: UPDATE_USERS_ACTION, payload: [...users, user] });
  }
};

export const deleteUser = (dispatch: Dispatch, users: IUser[], id: string) => {
  users.splice(
    users.findIndex((user) => user.login.uuid === id),
    1
  );

  dispatch({ type: UPDATE_USERS_ACTION, payload: users });
};
