import React, { useState } from "react";
import { combineReducers } from "redux";
import { connect } from "react-redux";
import { createStore } from "redux";
import { Provider } from "react-redux";

let nextTodoId = 0;

const addTodo = (content) => {
  console.warn("addTodo", content);
  return {
    type: "ADD_TODO",
    payload: {
      id: ++nextTodoId,
      content,
    },
  };
};

const initialState = {
  allIds: [],
  byIds: {},
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const { id, content } = action.payload;
      console.log(action.type);
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    default:
      return state;
  }
};

const reducers = combineReducers({ todos });

export const store = createStore(reducers);

const Reduxer = (props) => {
  const [counter, setCounter] = useState(0);

  const makeSome = () => {
    setCounter(counter + 1);
    props.addTodo(counter);
    console.warn(props, addTodo);
    // props.dispatch(addTodo(counter, "thing"));
  };

  return (
    <div data-testid="Reduxer">
      <p data-testid="count">{counter}</p>
      <button onClick={() => makeSome()}>Press me</button>
    </div>
  );
};

const mapStateToProps = (props) => {
  console.log("inkoked", props);
  return {
    allIds: props.allIds,
    byIds: props.byIds,
  };
};

const mapDispatchToProps = { addTodo };

const AllTogether = connect(mapStateToProps, mapDispatchToProps)(Reduxer);
console.warn(AllTogether);
export default AllTogether;

// const AllTogether = (props) => {
//   console.warn(props);
//   return <ConnectedReduxer />;
// };

// export default AllTogether;
