import { useState, useEffect } from "react";

/**
 * This component expects a single `img` as `children`.
 */
const ProgressiveImgWrapper = ({ thumbnail, children }) => {
  const fullImg = children;
  const [state, setState] = useState({
    loaded: false,
  });
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setState({ loaded: true });
    };
    image.src = fullImg.props.src;
  }, [fullImg]);
  return state.loaded ? fullImg : thumbnail;
};

export default ProgressiveImgWrapper;
