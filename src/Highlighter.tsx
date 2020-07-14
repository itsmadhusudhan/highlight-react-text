import React from "react";
import useHighlighter from "./useHighlighter";

type Props = {
  searchText: string[] | string;
  children: string;
  parentTag?: React.ElementType;
  ignoreCase?: boolean;
};

const Highlighter = ({
  children,
  searchText,
  parentTag: Tag = "p",
  ignoreCase = true,
}: Props) => {
  const { highlights } = useHighlighter({
    searchText,
    text: children,
    ignoreCase,
  });

  return <Tag>{highlights}</Tag>;
};

export default Highlighter;
