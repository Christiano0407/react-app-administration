//** =================== === Context Global === ========================= */
import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from 'react';
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
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem(`transaction`);
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(`transaction`, JSON.stringify(state));
  }, [state]);

  const addTransaction = (transition) => {
    console.log('Add New Transaction');
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transition,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  return (
    <context.Provider
      value={{
        transaction: state.transaction,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </context.Provider>
  );
};
