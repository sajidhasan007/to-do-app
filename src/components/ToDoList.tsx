import { useEffect, useState } from "react";
import {
	Button,
	Popconfirm,
	Space,
	Switch,
	Table,
	TableColumnsType,
	Tag,
	Tooltip,
} from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";

type ITodoData = {
	id: string;
	title: string;
	status: string;
	priority: string;
};

const ToDoList = () => {
	const navigate = useNavigate();
	const [todoData, setTodoData] = useState<ITodoData[]>([]);
	const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
	const [completeTask, setCompleteTask] = useState<ITodoData[] | []>([]);
	const handleTableChange = (paginationProps: number) => {
		console.log("my pagination number is = ", paginationProps);
		setPagination((prevPagination) => ({
			...prevPagination,
			current: paginationProps,
		}));
	};
	useEffect(() => {
		const todoListFromLocalStorage = JSON.parse(
			localStorage.getItem("todoList") as string,
		);
		if (todoListFromLocalStorage) {
			setTodoData(todoListFromLocalStorage);
			setCompleteTask(
				todoListFromLocalStorage.filter(
					(item: ITodoData) => item.status === "complete",
				),
			);
		}
	}, []);

	const deleteTodo = (id: string) => {
		const updatedTodoList: ITodoData[] = todoData.filter(
			(todo) => todo?.id !== id,
		);
		setTodoData(updatedTodoList);
		setCompleteTask(
			updatedTodoList.filter(
				(item: ITodoData) => item.status === "complete",
			),
		);
		// Update localStorage
		localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
	};

	const columns: TableColumnsType<ITodoData> = [
		{
			title: "S.No.",
			key: "serialNumber",
			align: "left",
			width: "10%",
			render: (_text, _record, index) =>
				index + 1 + (pagination.current - 1) * pagination.pageSize,
		},
		{
			title: "Title",
			dataIndex: "title",
			key: "title",
			align: "left",
			width: "40%",
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			align: "left",
			width: "15%",
			render: (_text, record) => <div>{record.status.toUpperCase()}</div>,
		},
		{
			title: "Priority",
			dataIndex: "priority",
			key: "priority",
			align: "left",
			width: "15%",
			render: (_text, record) => (
				<Tag
					color={
						record.priority === "high"
							? "red"
							: record.priority === "low"
								? "green"
								: "blue"
					}
					key={record.id}
				>
					<div>{record.priority.toUpperCase()}</div>
				</Tag>
			),
		},
		{
			title: "Action",
			key: "action",
			align: "center",
			width: "15%",
			render: (record: ITodoData) => (
				<Space size="middle">
					<Tooltip placement="bottom" title="Edit">
						<button
							onClick={() => navigate(`/edit/${record.id}`)}
							type="button"
							className="py-2 px-2 text-lg font-medium text-gray-900 bg-white rounded-l border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
						>
							<AiOutlineEdit />
						</button>
					</Tooltip>
					<Tooltip placement="bottom" title="Make Complete">
						<div className="py-2 px-2 text-sm font-medium text-gray-900 bg-bg-gray-100 rounded-l border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 ">
							{record.status === "complete" ? (
								<Switch
									// onChange={makeComplete}
									size="small"
									defaultChecked
									disabled
								/>
							) : (
								<Switch
									size="small"
									onChange={(e) => makeComplete(e, record.id)}
								/>
							)}
						</div>
					</Tooltip>
					<Tooltip placement="bottom" title="Delete Task">
						<Popconfirm
							placement="leftTop"
							title={"Are you sure to delete this todo?"}
							onConfirm={() => deleteTodo(record.id)}
							okText="Yes"
							cancelText="No"
						>
							<div className="py-2 px-2 text-lg font-medium text-gray-900 bg-white rounded-l border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
								<RiDeleteBinLine className="text-red-600 cursor-pointer" />
							</div>
						</Popconfirm>
					</Tooltip>
				</Space>
			),
		},
	];

	const makeComplete = (e: any, id: string) => {
		if (!todoData) return;
		const index = todoData.findIndex((item: ITodoData) => item.id === id);
		todoData[index].status = e ? "complete" : "incomplete";
		localStorage.setItem("todoList", JSON.stringify(todoData));
	};

	return (
		<div>
			<div className="flex justify-end items-center gap-2">
				<div className="-mt-2">
					<h4 className="text-2xl font-semibold text-appPrimaryColor">
						Total: {todoData?.length}
					</h4>
				</div>
				<div className="-mt-2">
					<h4 className="text-2xl font-semibold text-appCompleteColor">
						Complete: {completeTask?.length}
					</h4>
				</div>
				<Button
					type="primary"
					className="flex justify-center items-center gap-1 text-white mb-2"
					onClick={() => navigate("/add")}
				>
					Add New
					<GoPlus className="text-white font-bold" />
				</Button>
			</div>
			<div className="mb-6">
				<Table
					columns={columns}
					dataSource={todoData.length > 0 ? todoData : []}
					rowKey="id"
					pagination={{
						...pagination,
						onChange: handleTableChange,
					}}
				/>
			</div>
		</div>
	);
};

export default ToDoList;
