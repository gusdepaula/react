import { useState } from 'react';

function useForm(valoreIniciais) {
  const [values, setValues] = useState(valoreIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(valoreIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
