import { createContext, useEffect, useState } from "react";
import API from "../api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

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
      setUser(res.data.user);
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

    localStorage.setItem("token", token);
    setToken(token);

    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setUser(res.data.user);

    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    delete API.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, signup, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
