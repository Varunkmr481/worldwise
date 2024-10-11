import { createContext } from "react";
import { AuthContext } from "../contexts/fakeAuthContext";

export default function useAuth() {
  const context = createContext(AuthContext);
  if (context === undefined)
    throw new Error("The AuthContext has been used outside the AuthProvider");
  return useAuth;
}
