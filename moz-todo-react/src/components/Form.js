import React from "react";

function handleSubmit(e) {
  e.preventDefault();
  alert("할일이 추가 되었습니다!");
}

function Form(props) {
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
