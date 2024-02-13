/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTodo, setTodo } from "@/api/todo/todo";
import { ITodoData } from "@/model/todoModel";

const EditTodo = () => {
	const { handleSubmit, register, setValue } = useForm<ITodoData>();
	const navigate = useNavigate();
	const { id } = useParams();
	const [todoData, setTodoData] = useState<ITodoData[] | null>(null);
	const [editTodo, setEditTodo] = useState<ITodoData[]>([]);

	useEffect(() => {
		fetchTodoFromLocalStorage();
	}, []);

	useEffect(() => {
		if (todoData) {
			setValue("title", editTodo?.[0]?.title);
			setValue("status", editTodo?.[0]?.status);
			setValue("priority", editTodo?.[0]?.priority);
		}
	}, [todoData, setValue]);
	const fetchTodoFromLocalStorage = async () => {
		const storedTodo: ITodoData[] | null = await getTodo();
		if (storedTodo) {
			setTodoData(storedTodo);
			setEditTodo(storedTodo.filter((item: ITodoData) => item.id === id));
		}
	};

	const onSubmit = async (data: ITodoData) => {
		if (!todoData) return;
		const index = todoData.findIndex((item: ITodoData) => item.id === id);
		data.id = id as string;
		todoData[index] = data;
		await setTodo(todoData);
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
