"use client";

import { api } from "@/lib/api";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  student_id: string;
  student_name: string;
  student_department: string;
  student_major: string;
}

interface LoginResponce extends User {
  status: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (id: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFromStorage = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };
    loadUserFromStorage();
  }, []);

  const login = async (id: string, password: string) => {
    try {
      const { data } = await api.post<LoginResponce>("/auth/login", {
        id,
        password,
      });
      console.log(data);
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      // Re-throw the error to be caught by the login form
      throw error;
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("user");
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
