import React, { useState, useCallback } from 'react';

function useInputs<T extends Record<string, any>>(initialForm: T) {
  const [form, setForm] = useState<T>(initialForm);
  const reset = useCallback(() => {
    setForm(initialForm);
  }, [initialForm]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((preState) => ({ ...preState, [name]: value }));
  };

  const setValue = (name: string, value: string) => {
    setForm((preState) => ({ ...preState, [name]: value }));
  };

  const setValues = (newSatate: T) => {
    setForm((preState) => ({ ...preState, ...newSatate }));
  };

  return [form, onChange, reset, setValue, setValues] as const;
}

export default useInputs;
