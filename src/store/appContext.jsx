import React, { useState, useEffect } from "react";
import getState from "./flux.jsx";

export const Context = React.createContext(null);

const AppContext = ({ children }) => {
  const initialState = getState({
    getStore: () => state ? state.store : {}, // Protege el acceso a `state` en la inicialización
    getActions: () => state ? state.actions : {},
    setStore: (updatedStore) => {
      setState({
        store: { ...state.store, ...updatedStore },
        actions: { ...state.actions },
      });
    },
  });

  const [state, setState] = useState(initialState);

  useEffect(() => {
  }, []);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default AppContext;
