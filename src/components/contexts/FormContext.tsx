import { createContext, ReactNode, useState } from 'react';

// TODO: フォームの送信するデータの型定義

const FormCtx = createContext({} as any);

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [currentState, setCurrentState] = useState({});
  const value = {
    currentState,
    setCurrentState,
  };

  return <FormCtx.Provider value={value}>{children}</FormCtx.Provider>;
};

export { FormCtx, FormProvider };
