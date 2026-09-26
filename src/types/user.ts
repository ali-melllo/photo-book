export type User = {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  avatar?: string;
};

export type AuthState = {
  user: User | null;
  status: "idle" | "authenticated" | "unauthenticated";
};
