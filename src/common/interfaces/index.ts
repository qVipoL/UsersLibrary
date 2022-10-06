import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export interface IRoute {
  name?: string;
  path: string;
  Component: () => JSX.Element;
}

export interface IUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: string;
      name: string;
    };
    city: string;
    country: string;
  };
  email: string;
  login: {
    uuid: string;
  };
  picture: {
    medium: string;
  };
}

export interface IUpsertUser {
  id: string;
  email: string;
  city: string;
  country: string;
  streetName: string;
  streetNumber: string;
  firstName: string;
  lastName: string;
}

export interface IUsersResponse {
  results: IUser[];
}

export interface IStyles {
  [key: string]: SxProps<Theme>;
}
