import React from "react";
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
type ITodoData = {
	title: string;
	status: "complete" | "incomplete";
	priority: "low" | "medium" | "high";
};

const AddToDo = () => {
	const { handleSubmit, register } = useForm<ITodoData>();
	const navigate = useNavigate();

	const onSubmit = (data: ITodoData) => {
		console.log(data);
	};

	return (
		<div>
			<div className="flex justify-between mb-4">
				<h1 className="text-3xl text-appPrimaryColor">Add New Todo</h1>
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

export default AddToDo;
