//** =================== === Context Global === ========================= */
import { createContext, useContext, useState, useReducer } from 'react';
import { reducer } from './appReducer';

//** === */
const initialState = {
  transaction: [],
};
export const context = createContext();

export const useGlobalState = () => {
  const contextSate = useContext(context);
  return contextSate;
};

export const GlobalProvider = ({ children }) => {
  //const [state, setState] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider
      value={{
        transaction: state.transaction,
      }}
    >
      {children}
    </context.Provider>
  );
};
