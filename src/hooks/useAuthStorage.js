import React, { createContext, useContext, useReducer } from 'react';
import authReducer from '../utils/authReducer';

const AuthContext = createContext();

const initialState = { token: null };

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthStorage = () => useContext(AuthContext);
