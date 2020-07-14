export declare type HighlightProps = {
    searchText: string[] | string;
    text: string;
    ignoreCase?: boolean;
};
declare const useHighlighter: ({ searchText, text, ignoreCase, }: HighlightProps) => {
    highlights: string | any[];
};
export default useHighlighter;
