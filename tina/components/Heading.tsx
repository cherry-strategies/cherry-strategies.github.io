import React from "react";

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -

const Heading = (props: any) => {
  const H = props.type;

  return (
    <H
      id={slugify(props.children.props.content[0].text)}
      className="font-display text-center"
    >
      {props.children}
    </H>
  );
};

export default Heading;
