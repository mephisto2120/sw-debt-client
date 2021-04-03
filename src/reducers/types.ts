export type AuthProps = {
  authenticated: string;
};

export type Auth = {
  authenticated: string;
  errorMessage: string;
};

export type AuthState = {
  auth: Auth;
};
