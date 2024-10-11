import { useContext } from "react";
import { AuthContext } from "../contexts/FakeAuthenticationContext";

// eslint-disable-next-line
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("The AuthContext has been used outside the AuthProvider");
  return context;
}

export { useAuth };
