import { useState } from "react";

const useInput = (defaultValue, validator) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) setValue(e.target.value);
  };

  return { value, onChange };
};

export default useInput;
