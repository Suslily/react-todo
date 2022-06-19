import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div>
      <p>完了のtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div>
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
