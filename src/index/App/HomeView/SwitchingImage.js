import { useState, useEffect } from "react";

const SwitchingImage = (props) => {
  const { before, after } = props;
  const [state, setState] = useState({
    switched: false,
    componentProps: { ...before },
  });
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setState({ switched: true, componentProps: { ...after } });
    };
    image.src = after.src;
  }, [after]);

  return <img {...state.componentProps} alt={state.componentProps.alt} />;
};

export default SwitchingImage;
