import createDataContext from "./createDataContext";

const actionTypes = {
  FORM_VALUE_ONCHANGE: "FORM_VALUE_ONCHANGE"
};

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.FORM_VALUE_ONCHANGE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

const formValOnChange = dispatch => (name, value, error) => {
  const data = {};
  data[name] = {
    value,
    error
  };
  dispatch({
    type: actionTypes.FORM_VALUE_ONCHANGE,
    payload: { ...data }
  });
};

export const { Context, Provider } = createDataContext(
  formReducer,
  { formValOnChange },
  {}
);
