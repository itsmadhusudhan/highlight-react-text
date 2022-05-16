import { useMemo } from "react";
import { getHighlights, createRegexText } from "./utils";

export type HighlightProps = {
  searchText: string[] | string;
  text: string;
  ignoreCase?: boolean;
};

const useHighlighter = ({
  searchText,
  text,
  ignoreCase = true,
}: HighlightProps) => {
  // join the search text array and make regex search text
  const regexText = useMemo(() => createRegexText(searchText), [searchText]);

  const highlights = useMemo(
    () => getHighlights(regexText, text, ignoreCase),
    [regexText, text, ignoreCase]
  );

  return { highlights };
};

export default useHighlighter;
