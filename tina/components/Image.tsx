import React from "react";

const Image = (props: any) => {
  return (
    <img
      src={props.url}
      alt={props.alt}
      className="float-end"
      loading="lazy"
      decoding="async"
    />
  );
};

export default Image;
