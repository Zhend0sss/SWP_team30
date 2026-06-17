import React, { useState } from "react";
import { AuthContext } from "./auth-context";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const mockUser = {
      id: 1,
      username: credentials.username || "demo_user",
      email: "demo@example.com",
    };

    setUser(mockUser);
    return mockUser;
  };

  const register = async (data) => {
    const mockUser = {
      id: 1,
      username: data.username || "new_user",
      email: data.email || "new@example.com",
    };

    setUser(mockUser);
    return mockUser;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
