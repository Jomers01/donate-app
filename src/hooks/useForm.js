import { useState } from "react";

function useForm(initialState = {}) {
  const [form, setForm] = useState(initialState);

  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const resetForm = () => {
    setForm(initialState);
  }
  
  return [form, handleInputChange, resetForm];
}

export default useForm;
