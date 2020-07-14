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
  const regexText = createRegexText(searchText);

  return { highlights: getHighlights(regexText, text, ignoreCase) };
};

export default useHighlighter;
