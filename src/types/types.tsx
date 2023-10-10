export interface ILoginUser {
  user: IUser;
}
export interface IUser {
  phone: string;
  id: string;
  role: string;
  fullName: string;
  dateOfBirth: string;
  password: string;
}
