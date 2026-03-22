export type InsertUser = {
  username: string;
  password: string;
};

export type User = InsertUser & {
  id: string;
};
