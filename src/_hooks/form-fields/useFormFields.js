import { useState } from "react";

const useFormFields = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  const resetFormData = () => {
    setFormData(initialState);
  };

  const addInput = (newInput, defaultValue = '') => {
    setFormData(formData => ({ ...formData, [newInput]: defaultValue }));
  };

  return [formData, handleChange, resetFormData, addInput];
};

export default useFormFields;