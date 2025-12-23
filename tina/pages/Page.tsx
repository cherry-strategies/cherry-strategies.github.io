import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import CardGrid from "../components/CardGrid.tsx";
import Heading from "../components/Heading.tsx";
import Image from "../components/Image.tsx";

type Props = {
  variables: PageQueryVariables;
  data: PageQuery;
  query: string;
};

const components = {
  h1: Heading,
  h2: Heading,
  h3: Heading,
  h4: Heading,
  h5: Heading,
  h6: Heading,
  img: Image,
  card_grid: CardGrid,
};

const TinaPage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.page;

  return (
    <div className="stack" data-tina-field={tinaField(page, "body")}>
      <TinaMarkdown content={page.body} components={components} />
    </div>
  );
};

export default TinaPage;
