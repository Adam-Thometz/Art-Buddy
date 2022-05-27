import { useState } from "react";

const useFormFields = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  
  const handleChange = ({name, value}) => {
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const resetFormData = () => {
    setFormData(initialState);
  }

  return [formData, handleChange, resetFormData];
}

export default useFormFields;