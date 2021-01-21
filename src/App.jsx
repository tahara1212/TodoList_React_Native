import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [inCompleteTodos, setIncompleteTodos] = useState([
    "うどん",
    "そば",
    "ラーメン"
  ]);

  const [completeTodos, setCompleteTodos] = useState([
    "チキンラーメン",
    "どん兵衛"
  ]);

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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={inputtext}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
