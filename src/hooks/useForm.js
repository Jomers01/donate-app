import { useState } from 'react';
import uploadFile from '../helpers/uploadFile';

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

  const handleFileChange = async (e) => {
    const urlCloudinary = await uploadFile(e.target.files[0]);
    setForm({
      ...form,
      [e.target.name]: urlCloudinary
    });
  }

  return [form, handleInputChange, resetForm, handleFileChange, setForm];
}

export default useForm;
