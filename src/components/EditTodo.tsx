/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type ITodoData = {
	id: string;
	title: string;
	status: "complete" | "incomplete";
	priority: "low" | "medium" | "high";
};

const EditTodo = () => {
	const { handleSubmit, register, setValue } = useForm<ITodoData>();
	const navigate = useNavigate();
	const { id } = useParams();
	const [todo, setTodo] = useState<ITodoData[] | null>(null);
	const [editTodo, setEditTodo] = useState<ITodoData[]>([]);

	const fetchTodoFromLocalStorage = () => {
		const storedTodo = localStorage.getItem("todoList");
		if (storedTodo) {
			const parsedTodo: ITodoData[] = JSON.parse(storedTodo);
			setTodo(parsedTodo);
			setEditTodo(parsedTodo.filter((item: ITodoData) => item.id === id));
		}
	};

	useEffect(() => {
		fetchTodoFromLocalStorage();
	}, []);

	useEffect(() => {
		console.log("my todo list is = ", editTodo);
		if (todo) {
			setValue("title", editTodo?.[0]?.title);
			setValue("status", editTodo?.[0]?.status);
			setValue("priority", editTodo?.[0]?.priority);
		}
	}, [todo, setValue]);

	const onSubmit = (data: ITodoData) => {
		if (!todo) return;
		const index = todo.findIndex((item: ITodoData) => item.id === id);
		data.id = id as string;
		todo[index] = data;
		localStorage.setItem("todoList", JSON.stringify(todo));
		navigate(`/`);
	};

	return (
		<div>
			<div className="flex justify-between mb-4">
				<h1 className="text-3xl text-appPrimaryColor">Edit Todo</h1>
				<div
					className="flex items-center gap-1 cursor-pointer text-appPrimaryColor hover:underline"
					onClick={() => navigate(`/`)}
				>
					<IoArrowBack /> <p>back</p>
				</div>
			</div>
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-4 flex flex-col">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						{...register("title")}
						placeholder="Enter task title"
						className="border p-2 rounded-lg"
						required
					/>
				</div>

				<div className="mb-4 flex flex-col">
					<label htmlFor="status">Status</label>
					<select
						id="status"
						{...register("status")}
						className="border p-2 rounded-lg cursor-pointer"
						required
					>
						<option value="complete">Complete</option>
						<option value="incomplete">Incomplete</option>
					</select>
				</div>

				<div className="mb-4 flex flex-col">
					<label htmlFor="priority">Priority</label>
					<select
						id="priority"
						{...register("priority")}
						className="border p-2 rounded-lg cursor-pointer"
						required
					>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
				</div>

				<div className="mb-4">
					<button
						type="submit"
						className="bg-appPrimaryColor text-white p-2 rounded-lg"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditTodo;
