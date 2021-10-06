import { useEffect } from "react";

const useBodyClassName = (getClassName) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.className = getClassName();
  });
};

export default useBodyClassName;
