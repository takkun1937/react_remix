import { ReactNode, createContext } from 'react';
import { AuthContextType } from '../type';
import { useAuth } from '../hooks/useAuth';

/**
 * Context
 */
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const AuthContextValue = useAuth();

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
