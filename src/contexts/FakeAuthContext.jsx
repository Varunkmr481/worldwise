import { createContext, useReducer } from "react";

const AuthContext = createContext();

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

// eslint-disable-next-line
function AuthProvider({ children }) {
  const initialState = {
    user: null,
    isAuthenticated: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "login":
        return { ...state, user: action.payload, isAuthenticated: true };

      case "logout":
        return { ...state, ...initialState };

      default:
        throw new Error("Unknown action");
    }
  }

  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (password === FAKE_USER.password && email === FAKE_USER.email) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
