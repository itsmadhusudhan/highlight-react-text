import React from "react";
declare type Props = {
    searchText: string[] | string;
    children: string;
    parentTag?: React.ElementType;
    ignoreCase?: boolean;
};
declare const Highlighter: ({ children, searchText, parentTag: Tag, ignoreCase, }: Props) => JSX.Element;
export default Highlighter;
