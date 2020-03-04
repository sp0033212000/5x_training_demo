import React, { useContext } from "react";
import { Context as FormContext } from "../../context/FormContext";
import formValidHelper from "../../helper/formValidHelper";

const FormSelect = ({ id, required, type, options, name }) => {
	const { state, formValOnChange } = useContext(FormContext);

	const onInputChange = (e) => {
		const val = e.target.value;
		const error = formValidHelper(val, type);
		formValOnChange(name, val, error);
	};

	return (
		<select
			className="form-control input-lg"
			value={state[name] ? state[name].value : ""}
			onChange={onInputChange}
			id={id}
			name={name}
			required={required}
		>
			{options.map(({ value, label }) => {
				return (
					<option key={value} value={value}>
						{label}
					</option>
				);
			})}
		</select>
	);
};

export default FormSelect;
