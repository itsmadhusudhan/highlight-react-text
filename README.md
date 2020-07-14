# highlight-react-text

This small library is created to highlight text in react.

## Why create this library?

I just wanted to try and created a small library that I can use to highlight text while searching.

## Usage

1. Highlight Component

```jsx
import { Highlighter } from "highlight-react-text";

const Text = () => {
  return (
    <Highlighter searchText="highlight">
      This is the highlighted text we are looking at.
    </Highlighter>
  );
};
```

2. useHighlighter custom react hook

```jsx
import { Highlighter } from "highlight-react-text";

const Text = () => {
  const { highlights } = useHighlighter({
    searchText: "highlight",
    text: "This is the highlighted text we are looking at",
  });

  return <p>{highlights}</p>;
};
```
