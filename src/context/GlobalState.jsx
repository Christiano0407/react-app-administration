//** =================== === Context Global === ========================= */
import { createContext, useContext } from 'react';

export const context = createContext();

export const useGlobalState = () => {
  const contextSate = useContext(context);
  return contextSate;
};

export const GlobalProvider = ({ children }) => {
  return <context.Provider value={{ total: 10 }}>{children}</context.Provider>;
};
