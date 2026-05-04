import React from "react";

const Image = (props: any) => {
  return (
    <img
      src={props.url}
      alt={props.alt}
      className="float-end"
      width="320"
      height="480"
      loading="lazy"
      decoding="async"
    />
  );
};

export default Image;
