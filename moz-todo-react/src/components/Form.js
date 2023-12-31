import React from "react";

function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask("할 일이 추가되었습니다!");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          무엇을 해야 합니까?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        추가
      </button>
    </form>
  );
}

export default Form;
