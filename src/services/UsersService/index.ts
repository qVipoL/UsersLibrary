import { AxiosResponse } from "axios";
import { IUsersResponse } from "src/common/interfaces";
import API from "../API";

class UsersService {
  static async getUsers(): Promise<AxiosResponse<IUsersResponse>> {
    return API.get<IUsersResponse>("/?results=10");
  }
}

export default UsersService;
