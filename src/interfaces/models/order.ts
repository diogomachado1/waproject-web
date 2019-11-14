import IUser from './user';

export interface IOrder {
  id?: number;
  description: string;
  amount: number;
  value: number;
  userId?: number;
  user?: IUser;
  createdDate?: Date;
  updatedDate?: Date;
}
