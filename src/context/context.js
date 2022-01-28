import React, { useReducer, createContext } from 'react';

import contextReduser from './contextReduser';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {

  const [transaction, dispatch] = useReducer(contextReduser, initialState);

  const deleteTransaction = (id) => dispatch({type: "DELETE_TRANSACTION", payload: id});

  const addTransaction = (transaction) => dispatch({type: "ADD_TRANSACTION", payload: transaction});

  return (
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};