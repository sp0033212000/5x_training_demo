import React from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

const FormConcent = ({ formData }) => {
  const typePicker = item => {
    if (item.type === "textarea") {
      return <FormTextarea {...item} />;
    }
    if (item.type === "select") {
      return <FormSelect {...item} />;
    }
    return <FormInput {...item} />;
  };
  return formData.map(item => {
    return (
      <div key={item.name} className="form-group">
        {typePicker(item)}
      </div>
    );
  });
};

export default FormConcent;
