import { createContext, useReducer } from "react";
import BackgroundReducer from "./BackgroundReducer";

const INITIAL_STATE = {
  background: "blue",
};

export const BackgroundContext = createContext(INITIAL_STATE);

export const BackgroundContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BackgroundReducer, INITIAL_STATE);

  return (
    <BackgroundContext.Provider value={{ background: state.background, dispatch }}>
      {children}
    </BackgroundContext.Provider>
  );
};