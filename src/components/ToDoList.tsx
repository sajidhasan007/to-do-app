import { Popconfirm, Space, Table, TableColumnsType, Tooltip } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

type ITodoData = {
	id: string;
	title: string;
	status: string;
	priority: string;
};

const ToDoList = () => {
	const navigate = useNavigate();

	const deleteTodo = (id: string) => {
		console.log("hello with", id);
	};

	const columns: TableColumnsType<ITodoData> = [
		{
			title: "Todo Id",
			key: "id",
			align: "center",

			// // width: "10%",
			// width: "80%",
			render: (record: ITodoData) => (
				<div className="break-all">{record?.id}</div>
			),
		},
		{
			title: "Title",
			key: "title",
			align: "center",

			// width: "80%",
			render: (record: ITodoData) => (
				<div className="break-all">{record?.title}</div>
			),
		},
		{
			title: "Status",
			key: "status",
			align: "center",

			render: (record: ITodoData) => (
				<div className="break-all">{record?.status}</div>
			),
		},

		{
			title: "Priority",
			key: "priority",
			align: "center",

			render: (record: ITodoData) => (
				<div className="break-all">{record?.priority}</div>
			),
		},

		{
			title: "Action",
			key: "action",
			align: "center",

			// width: "10%",
			render: (record: ITodoData) => (
				<Space size="middle">
					<div
						className="inline-flex rounded-md shadow-sm"
						role="group"
					>
						<Tooltip placement="bottom" title="Edit">
							<button
								onClick={() => navigate(`/edit/${record?.id}`)}
								type="button"
								className="py-2 px-2 text-sm font-medium text-gray-900 bg-white rounded-l border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
							>
								<AiOutlineEdit />
							</button>
						</Tooltip>
						<Tooltip placement="bottom" title="Details">
							<button
								type="button"
								onClick={() =>
									navigate(`/details/${record?.id}`)
								}
								className="py-2 px-2 text-sm font-medium text-gray-900 bg-white rounded-l border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
							>
								<CiViewList />
							</button>
						</Tooltip>
						<Tooltip placement="bottom" title="Profile Delete">
							<Popconfirm
								placement="leftTop"
								title={"Are you sure to delete this todo?"}
								// onConfirm={() => deleteProfile(record.id)}
								onConfirm={() => deleteTodo(record?.id)}
								okText="Yes"
								cancelText="No"
							>
								<div
									// type="button"
									className="py-2 px-2 text-sm font-medium text-gray-900 bg-white rounded-l border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
								>
									<RiDeleteBinLine className="text-red-600 cursor-pointer" />
								</div>
							</Popconfirm>
						</Tooltip>
					</div>
				</Space>
			),
		},
	];
	return (
		<div>
			<div className="mb-6">
				<Table
					columns={columns}
					dataSource={todoData}
					rowKey={"id"}
					pagination={{
						defaultPageSize: 10,
						showSizeChanger: true,
						pageSizeOptions: ["10", "20", "30"],
					}}
				/>
			</div>
		</div>
	);
};

export default ToDoList;

const todoData: ITodoData[] = [
	{
		id: "1",
		title: "Task 1",
		status: "complete",
		priority: "low",
	},
	{
		id: "2",
		title: "Task 2",
		status: "incomplete",
		priority: "high",
	},
	{
		id: "3",
		title: "Task 3",
		status: "complete",
		priority: "medium",
	},
	{
		id: "4",
		title: "Task 4",
		status: "incomplete",
		priority: "low",
	},
	{
		id: "5",
		title: "Task 5",
		status: "complete",
		priority: "high",
	},
	{
		id: "6",
		title: "Task 6",
		status: "incomplete",
		priority: "medium",
	},
	{
		id: "7",
		title: "Task 7",
		status: "complete",
		priority: "low",
	},
	{
		id: "8",
		title: "Task 8",
		status: "incomplete",
		priority: "medium",
	},
	{
		id: "9",
		title: "Task 9",
		status: "complete",
		priority: "high",
	},
	{
		id: "10",
		title: "Task 10",
		status: "incomplete",
		priority: "low",
	},
	{
		id: "11",
		title: "Task 11",
		status: "incomplete",
		priority: "low",
	},
];
