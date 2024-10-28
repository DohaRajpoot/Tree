import {
    React,
    createContext,
    useState,
  } from "react";
  
  export const AuthContext = createContext();
  
  export default function AuthProvider({ children }) {
  
    const [user, setUser] = useState(false);
    
    const isLogged = () => !!user;
  
    const login = (usuario) => {
      setUser(usuario);
    };
  
    const logout = () => {
      setUser(null);
    };
  
    const contextValue = {
      user,
      isLogged,
      login,
      logout
    };
  
    return (
      <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
  }