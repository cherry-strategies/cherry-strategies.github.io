import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const Grid = (props: any) => {
  return (
    <div className="grid">
      {props.items?.map((item: any, index: number) => (
        <div className="paper-neutral pad-01" key={index}>
          <h3 className="font-display scale-1 text-center">{item.title}</h3>
          <TinaMarkdown content={item.children} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
