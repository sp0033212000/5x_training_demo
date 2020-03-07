import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context as FormContext } from "../../context/FormContext";
import formValidHelper from "../../helper/formValidHelper";

const FormInput = ({ placeholder, type, name, id, required }) => {
  const { state, formValOnChange } = useContext(FormContext);

  const onInputChange = e => {
    const val = e.target.value;
    const error = formValidHelper(val, type);
    formValOnChange(name, val, error);
  };

  return (
    <input
      className="form-control input-lg"
      value={state[name] ? state[name].value : ""}
      onChange={onInputChange}
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      type={type === "email" ? "email" : "text"}
    />
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool
};

FormInput.defaultProps = {
  placeholder: "",
  type: "",
  name: "",
  id: "",
  required: false
};

export default FormInput;
