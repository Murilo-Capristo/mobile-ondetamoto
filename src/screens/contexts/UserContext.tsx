// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  usuario: string | null;
  setUsuario: (usuario: string) => void;
};

const AuthContext = createContext<AuthContextType>({
  usuario: null,
  setUsuario: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuarioState] = useState<string | null>(null);

  useEffect(() => {
  
    const loadUsuario = async () => {
      const storedUsuario = await AsyncStorage.getItem('userUsuario');
      if (storedUsuario) setUsuarioState(storedUsuario);
    };
    loadUsuario();
  }, []);

  const setUsuario = async (newUsuario: string) => {
    await AsyncStorage.setItem('userUsuario', newUsuario);
    setUsuarioState(newUsuario);
  };

  return (
    <AuthContext.Provider value={{ usuario: usuario, setUsuario }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
