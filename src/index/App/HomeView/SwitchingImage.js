import { useState, useEffect } from "react";

const SwitchingImage = (props) => {
  const { common, before, after } = props;
  const [state, setState] = useState({
    switched: false,
    componentProps: {...common, ...before},
  });
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setState({ switched: true, componentProps: {...common, ...after} });
    };
    image.src = common.src || after.src;
  }, [common, after]);

  return <img {...state.componentProps} alt={state.componentProps.alt} />;
};

export default SwitchingImage;
