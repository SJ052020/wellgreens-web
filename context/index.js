import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { InitialState } from "./state";
const Context = createContext();

const RootContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default RootContext;
export function useAppContext() {
  return useContext(Context);
}
