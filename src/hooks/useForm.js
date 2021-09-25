import { useState } from 'react';

function useForm(initialState = {}) {
  const [form, setForm] = useState(initialState);

  const resetForm = () => {
    setForm(initialState);
  }

  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return [form, handleInputChange, resetForm];
}

export default useForm;
