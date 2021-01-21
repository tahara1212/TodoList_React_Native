import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InComplete } from "./components/InComplete";
import { Complete } from "./components/Complete";

export const App = () => {
  const [inCompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const [inputtext, setInputText] = useState("");

  const onChangeTodoText = (event) => setInputText(event.target.value);

  // #TODOを追加
  const onClickAdd = () => {
    if (inputtext === "") return;
    const newTodos = [...inCompleteTodos, inputtext];
    setIncompleteTodos(newTodos);
    setInputText("");
  };

  // #TODOを削除
  const onClickDelete = (index) => {
    deleteInCompTodos(index);
  };

  // #TODOを完了
  const onClickComplete = (index) => {
    deleteInCompTodos(index);

    const compTarget2 = [...completeTodos, inCompleteTodos[index]];
    setCompleteTodos(compTarget2);
  };

  // #TODOを戻す
  const onClickReturn = (index) => {
    const compDeleteTarget = [...completeTodos];
    compDeleteTarget.splice(index, 1);
    setCompleteTodos(compDeleteTarget);

    const inCompTarget = [...inCompleteTodos, completeTodos[index]];
    setIncompleteTodos(inCompTarget);
  };

  const deleteInCompTodos = (index) => {
    const deleteTarget = [...inCompleteTodos];
    deleteTarget.splice(index, 1);
    setIncompleteTodos(deleteTarget);
  };

  return (
    <>
      <InputTodo
        inputtext={inputtext}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <InComplete
        inCompleteTodos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <Complete completeTodos={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
};
