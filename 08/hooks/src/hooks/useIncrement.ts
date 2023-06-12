import { useCallback, useState } from "react";
export const useIncrement = (initial: number) => {
  const [counter, setCounter] = useState(initial);
  const incrementar = useCallback(() => {
    console.log("incrementar 1");
    //datos 3s
    setCounter(counter + 1);
  }, counter);

  return { counter, setCounter, incrementar };
};
