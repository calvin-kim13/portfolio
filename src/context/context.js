import { createContext, useCallback, useReducer } from "react";

const type = {
  NAV: "NAV",
  SHOWPROJECT: "SHOWPROJECT",
  ACTIVEPROJECT: "ACTIVEPROJECT",
};

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case type.NAV:
      return {
        ...state,
        nav: action.payload,
      };
    case type.SHOWPROJECT:
      return {
        ...state,
        showProject: !state.showProject,
      };
    case type.ACTIVEPROJECT:
      return {
        ...state,
        activeProject: action.payload,
      };
    default:
      return state;
  }
};

const State = (props) => {
  const initialState = {
    nav: null,
    color: "blue",
    showProject: false,
    activeProject: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSection = useCallback((value) => {
    dispatch({
      type: type.NAV,
      payload: value,
    });
  }, []);

  const closeSection = useCallback(() => {
    dispatch({
      type: type.NAV,
      payload: null,
    });
  }, []);

  // Project view
  const showProjectFunction = useCallback(() => {
    dispatch({
      type: type.SHOWPROJECT,
    });
  }, []);

  const activeProjectFunction = useCallback((value) => {
    dispatch({
      type: type.ACTIVEPROJECT,
      payload: value,
    });
  }, []);

  const { color, nav, activeProject, showProject } = state;

  return (
    <Context.Provider
      value={{
        openSection: openSection,
        closeSection: closeSection,
        nav,
        color,
        // project
        showProjectFunction: showProjectFunction,
        activeProjectFunction: activeProjectFunction,
        activeProject,
        showProject,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;

export { Context };
