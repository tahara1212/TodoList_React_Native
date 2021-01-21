import React from "react";

export const InputTodo = (props) => {
  const { inputtext, onChange, onClick } = props;

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={inputtext} onChange={onChange} />
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
};
