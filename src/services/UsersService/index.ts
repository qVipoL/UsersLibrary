import { AxiosResponse } from "axios";
import { IUser, IUsersResponse } from "src/common/interfaces";
import API from "../API";

export enum USER_FILTERS {
  ID = "ID",
  NAME = "NAME",
  EMAIL = "EMAIL",
  LOCATION = "LOCATION",
}

class UsersService {
  static async getUsers(): Promise<AxiosResponse<IUsersResponse>> {
    return API.get<IUsersResponse>("/?results=10");
  }

  private static getUserFilter(filter: USER_FILTERS) {
    switch (filter) {
      case USER_FILTERS.ID:
        return (user: IUser, value: string) =>
          user.login.uuid.toLowerCase().includes(value.toLowerCase());
      case USER_FILTERS.NAME:
        return (user: IUser, value: string) =>
          user.name.title.toLowerCase().includes(value.toLowerCase()) ||
          user.name.first.toLowerCase().includes(value.toLowerCase()) ||
          user.name.last.toLowerCase().includes(value.toLowerCase());
      case USER_FILTERS.EMAIL:
        return (user: IUser, value: string) =>
          user.email.toLowerCase().includes(value.toLowerCase());
      case USER_FILTERS.LOCATION:
        return (user: IUser, value: string) =>
          user.location.country.toLowerCase().includes(value.toLowerCase()) ||
          user.location.city.toLowerCase().includes(value.toLowerCase()) ||
          user.location.street.name.toLowerCase().includes(value.toLowerCase());
    }
  }

  static filterUsers(
    users: IUser[],
    filter: USER_FILTERS,
    value: string
  ): IUser[] {
    const userFilter = UsersService.getUserFilter(filter);

    return users.filter((user) => {
      return userFilter(user, value);
    });
  }
}

export default UsersService;
