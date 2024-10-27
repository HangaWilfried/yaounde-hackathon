import { type Role, Status } from '@/utils/types/enum'

export type Article = {
  name: string;
  images: string[];
  value: {
    currency: string;
    amount: number;
  };
  description: string;
  isAvailable: boolean;
}

export type Market = {
  name: string;
  picture: string;
  articles: Article[];
};

export type UserDTO = {
  id?: string;
  lastname?: string;
  firstname?: string;
  email?: string;
  picture?: string;
  role?: Role
}

export type TransactionDTO = {
  id?: string;
  author?: UserDTO;
  issueDate?: string;
  status?: Status;
  fees?: ValueDTO;
  productId?: string;
}

export type ValueDTO = {
  currency?: string;
  amount?: number;
}

export type NotificationDTO = {
  id?: string;
  issueDate?: string;
  content?: string;
}

export type StatisticDTO = {
  text?: string;
  total?: number;
}
