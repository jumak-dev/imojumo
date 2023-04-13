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

  return [form, onChange, reset] as const;
}

export default useInputs;
