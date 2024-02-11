import { ToDoList } from "@/components";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ListPage from './ListPage';
// import EditPage from './EditPage';
// import AddTodoPage from './AddTodoPage';

function RouteList() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ToDoList />} />
				{/* <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/add" element={<AddTodoPage />} /> */}
			</Routes>
		</Router>
	);
}

export default RouteList;
