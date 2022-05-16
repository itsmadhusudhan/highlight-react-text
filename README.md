# highlight-react-text

This small library is created to highlight text in react.

## Usage

1. Highlight Component

```jsx
import { Highlighter } from "highlight-react-text";

const Text = () => {
  return (
    <Highlighter searchText="highlight" ignoreCase={true}>
      This is the highlighted text we are looking at.
    </Highlighter>
  );
};
```

2. useHighlighter custom react hook

```jsx
import { useHighlighter } from "highlight-react-text";

const Text = () => {
  const { highlights } = useHighlighter({
    searchText:[ "highlight",'Look'],
    text: "This is the highlighted text we are looking at",
    ignoreCase: true // defaults to true
  });

  return <p>{highlights}</p>;
};
```
