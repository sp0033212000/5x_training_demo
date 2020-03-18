import React, { useReducer } from "react";
import PropTypes from "prop-types";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    Object.keys(actions).forEach(key => {
      boundActions[key] = ((_action, _dispatch) => {
        return (...argument) => _action(...argument)(_dispatch);
      })(actions[key], dispatch);
    });

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  Provider.propTypes = {
    children: PropTypes.node.isRequired
  };

  return { Context, Provider };
};
