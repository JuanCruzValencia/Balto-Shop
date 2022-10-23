import { useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    handleChange,
  };
};
