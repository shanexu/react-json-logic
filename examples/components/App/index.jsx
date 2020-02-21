// Core
import React from 'react';

// UI
import GitHubForkRibbon from 'react-github-fork-ribbon';
import style from './style.scss';

// Examples
import Demo from '../Demo';

// Predefined Rules & Accessor Data
import accessor from '../../constants/accessor.json';
import higherOrderRule from '../../constants/higherOrderRule.json';

const App = () => (
  <div className={style.App}>
    <GitHubForkRibbon
      href="//github.com/altayaydemir/react-json-logic"
      target="_blank"
      position="right"
      color="black"
    >
      Fork me on GitHub
    </GitHubForkRibbon>

    <div className={style.Header}>
      <img
        className={style.ReactLogo}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        alt="react"
      />

      <img
        className={style.JsonLogicLogo}
        src="http://jsonlogic.com/images/jsonlogic-white.png"
        alt="jsonlogic"
      />
    </div>

    <div className={style.Content}>
      <Demo
        title="No Initial Value"
      />

      <Demo
        title="with Initial Value"
        value={JSON.parse(
          '{"==":[{"and":[{"==":["1","1"]},{"===":["0","0"]},{"==":["1","1"]}]},"1"]}',
        )}
      />

      <Demo
        title="with Initial Value (Async Loaded)"
        async
      />

      <Demo
        title="with Accessor"
        value={JSON.parse('{"===":[1,{"var":["a.b"]}]}')}
        data={{ a: { b: 1, c: 15, d: { f: 18 } }, x: { y: 15 } }}
      />

      <Demo
        title="with Accessor - Complex JSON and Higher Order Operators"
        value={higherOrderRule}
        data={accessor}
      />
    </div>
  </div>
);

export default App;
