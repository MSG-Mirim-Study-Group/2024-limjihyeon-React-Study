import React, { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    // tasks 배열을 map 함수를 사용하여 새로운 배열로 업데이트
    const updatedTasks = tasks.map((task) => {
      // 만약 현재 작업의 ID가 편집된 작업의 ID와 같다면
      if (id === task.id) {
        // 새로운 객체를 만들기 위해 객체 전개 연산자를 사용하여
        // `completed` 속성을 반전시킨 새로운 객체 반환
        // console.log({ ...task, completed: !task.completed });
        return { ...task, completed: !task.completed };
      }
      // 편집되지 않은 작업은 그대로 반환
      return task;
    });
    // 업데이트된 작업 배열을 상태로 설정
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic for 임지현</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
