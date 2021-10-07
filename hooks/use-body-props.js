import { useEffect } from "react";

const useBodyProps = (getProps) => {
  useEffect(() => {
    const body = document.querySelector("body");
    const props = getProps();
    for (const [key, value] of Object.entries(props)) {
      body[key] = value;
    }
  });
};

export default useBodyProps;
