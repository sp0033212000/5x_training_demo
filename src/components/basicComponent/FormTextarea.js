import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context as FormContext } from "../../context/FormContext";
import formValidHelper from "../../helper/formValidHelper";

const FormTextarea = ({ placeholder, type, name, id, required, rows }) => {
  const { state, formValOnChange } = useContext(FormContext);

  const onInputChange = e => {
    const val = e.target.value;
    const error = formValidHelper(val, type);
    formValOnChange(name, val, error);
  };

  return (
    <textarea
      className="form-control"
      value={state[name] ? state[name].value : ""}
      onChange={onInputChange}
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      rows={rows}
    />
  );
};

FormTextarea.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number
};

FormTextarea.defaultProps = {
  placeholder: "",
  type: "",
  name: "",
  id: "",
  required: false,
  rows: 1
};

export default FormTextarea;
