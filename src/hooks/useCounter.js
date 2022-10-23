import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(1);

  function handleAddClick() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function handleSubClick() {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      return;
    }
  }

  return {
    counter,
    handleAddClick,
    handleSubClick,
  };
};
