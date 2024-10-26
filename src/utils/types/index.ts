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
