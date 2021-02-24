import React from "react";
import RefEqual from "./ref-equal";
import UseMemoCallback from "./use-memo-callback";
import ThemedComponent from "./contexts";
import "./hooks.css";

function Hooks() {
  return (
    <div style={{ width: 800, margin: "100px auto" }}>
      <h1 id="react-hooks">React Hooks</h1>
      <h2 id="when-to-usememo-and-when-to-usecallback">
        When to useMemo and when to useCallback
      </h2>
      <p>
        These are built into React for two reasons: 1) Referential equality 2)
        Computationally expensive calculations
      </p>
      <p>
        What can we assume on a rerender? We can assume that if changes to state
        or props have been updated, that object will not be the same modified
        object. It will be an entirely new object.{" "}
      </p>
      <p>
        Even if the values are the same, the object itself is different.
        Therefore, they will not equate.
      </p>
      <h3 id="referential-equality">Referential equality</h3>
      <pre>
        <code>
          {'const bodie = { color: "black", annoying: true };\n' +
            "const bodieCopy = bodie;\n" +
            "bodieCopy === bodie; // true\n" +
            "\n" +
            "bodieCopy.annoying = false;\n" +
            "bodie.annoying === bodieCopy.annoying; // true"}
        </code>
      </pre>
      <p>
        In other words, when comparing two objects, the comparison is based on
        the object’s referential value not the values within the object.
      </p>

      <RefEqual />
      <hr />

      <h2 id="distinctions-between-usememo-and-usecallback">
        Distinctions between useMemo and useCallback
      </h2>
      <p>
        The <code>useMemo</code> hook is distinct from <code>useCallback</code>{" "}
        in that it allows you to apply memoization to any value type, not just
        functions.{" "}
      </p>
      <p>
        In addition, useMemo will only invoke the function when the value needs
        to be retrieved.
      </p>
      <h2 id="usecallback">useCallback</h2>
      <pre />
      <p>
        Returns a memoized callback that only changes if one of the dependencies
        has changed
      </p>
      <p>
        Behaves similarly to <code>shouldComponentUpdate</code>. Effectively
        determines reference equality to prevent unnecessary renders.
      </p>
      <pre>
        <code>
          <span className="hljs-comment">// These are equivalent</span>
          <span className="hljs-function">
            <span className="hljs-title">useCallback</span>
            <span className="hljs-params">(fn, deps)</span>
          </span>
          <span className="hljs-function">
            <span className="hljs-title">useMemo</span>
            <span className="hljs-params">(()</span>
          </span>{" "}
          =&gt; fn, deps)
        </code>
      </pre>

      <UseMemoCallback />

      <h2 id="usememo">useMemo</h2>
      <pre>
        <code>
          const memoizedValue = useMemo(() =&gt; computeExpensiveValue(
          <span className="hljs-name">a</span>, b), [a, b])
          <span className="hljs-comment">;</span>
        </code>
      </pre>
      <p>
        Most used as an optimization feature. As per the React hooks
        documentation:{" "}
      </p>
      <blockquote>
        <p>
          Write your code so that it still works without useMemo — and then add
          it to optimize performance.
        </p>
      </blockquote>
      <h2 id="usecontext">useContext</h2>
      <ThemedComponent />
      <h2 id="usereducer">useReducer</h2>
    </div>
  );
}

export default Hooks;
