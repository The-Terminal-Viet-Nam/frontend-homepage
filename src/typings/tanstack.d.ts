import "@tanstack/react-query";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}

interface SafeUser {
  id: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string | null;
  phoneVerified: boolean;
  displayName: string;
  permissions: number;
  credits: Decimal;
  clientSecret: string;
  discordUserId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisterData extends SafeUser {}
export interface LoginData extends SafeUser {}
export interface UserData extends SafeUser {}
