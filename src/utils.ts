import React from "react";

export const createRegexText = (text: string | string[]) => {
  if (Array.isArray(text)) {
    return text.filter((s) => Boolean(s)).join("|");
  }

  return text;
};

export const getHighlights = (
  regexText: string,
  text: string,
  ignoreCase: boolean = true
) => {
  // when empty just return the original text
  if (!regexText) {
    return text;
  }

  const caseFlag = ignoreCase ? "i" : "";

  const regex = new RegExp(regexText, caseFlag + "g");

  let match;

  const matchArray = [];

  while ((match = regex.exec(text)) !== null) {
    matchArray.push(match);
  }

  let lastIndex = 0;

  const matches = matchArray.reduce((acc: any[], m, i) => {
    const index: number = m.index;

    const prefix = text.substring(lastIndex, index);

    const length = m[0].length;

    const highlight = text.substring(index, length + index);

    const suffix = text.substring(index + length);

    lastIndex = index + length;

    const result = [
      prefix,
      React.createElement("mark", { key: index }, highlight),
    ];

    if (i === matchArray.length - 1 && suffix) {
      result.push(suffix);
    }

    return [...acc, ...result];
  }, []);

  return matches.length > 0 ? matches : text;
};
