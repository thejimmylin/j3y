import { useState, useEffect } from "react";

const ProgressiveImage = (props) => {
  const { imageSrc, imagePixelatedSrc, alt, blurDegree, ...otherProps } = props;
  const [state, setState] = useState({ src: imagePixelatedSrc, blur: true });
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setState({ src: imageSrc, blur: false });
    };
    image.src = imageSrc;
  }, [imageSrc]);

  return (
    <img
      {...otherProps}
      alt={alt}
      src={state.src}
      style={{
        filter: state.blur ? `blur(${blurDegree})` : "blur(0px)",
      }}
    />
  );
};

export default ProgressiveImage;
