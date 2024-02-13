import { ITodoData } from "@/model/todoModel";

export const getTodo = async () => {
	return JSON.parse(localStorage.getItem("todoList") as string);
};

export const setTodo = async (todo: ITodoData[]) => {
	localStorage.setItem("todoList", JSON.stringify(todo));
};
