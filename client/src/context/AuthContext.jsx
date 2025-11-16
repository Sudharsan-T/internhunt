import { createContext, useEffect, useState } from "react";
import API from "../api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  // Normalize any backend user response so UI always has name + email
  const normalizeUser = (apiUser = {}) => {
    return {
      id: apiUser.id || apiUser._id || null,
      name:
        apiUser.name ||
        apiUser.fullName ||
        apiUser.username ||
        (apiUser.email ? apiUser.email.split("@")[0] : null) ||
        "User",
      email: apiUser.email || null,
      ...apiUser,
    };
  };

  useEffect(() => {
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchUser = async () => {
    try {
      const res = await API.get("/protected");
      const normalized = normalizeUser(res.data.user);
      setUser(normalized);
    } catch (err) {
      console.error("Failed fetching user:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data) => {
    const res = await API.post("/auth/register", data);
    return res.data;
  };

  const login = async (data) => {
    const res = await API.post("/auth/login", data);

    const token = res.data.token;
    const apiUser = res.data.user;

    // Save token
    localStorage.setItem("token", token);
    setToken(token);
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Normalize + save user
    const normalized = normalizeUser(apiUser);
    setUser(normalized);

    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    delete API.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        signup,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
