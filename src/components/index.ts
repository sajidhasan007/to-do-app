import React from "react";

const ToDoList = React.lazy(() => import("@/components/ToDoList"));
const TodoHeader = React.lazy(() => import("@/components/TodoHeader"));
export { ToDoList, TodoHeader };
