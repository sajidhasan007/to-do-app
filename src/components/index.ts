import React from "react";

const ToDoList = React.lazy(() => import("@/components/ToDoList"));
const TodoHeader = React.lazy(() => import("@/components/TodoHeader"));
const AddToDo = React.lazy(() => import("@/components/AddToDo"));
const EditTodo = React.lazy(() => import("@/components/EditTodo"));

export { ToDoList, TodoHeader, AddToDo, EditTodo };
