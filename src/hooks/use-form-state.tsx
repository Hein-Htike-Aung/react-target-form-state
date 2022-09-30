import { useCallback, useRef, useState } from "react";

const useFormState_ = <T,>(form: T) => {
  type StateOfForm = Record<keyof T, boolean>;

  const [formState, setFormState] = useState<StateOfForm>({} as StateOfForm);
  const resetRef = useRef<(form: T) => void>();

  resetRef.current = (form: T) => {
    return Object.entries(form as {}).forEach(([key, _]) => {
      setFormState((prev) => ({ ...prev, [key]: false }));
    });
  };

  useCallback(() => resetRef.current(form), [form]);

  return [formState, setFormState, resetRef.current] as const;
};

export default useFormState_;
