import { AddToDo, ToDoList } from "@/components";
import { Loading } from "@/components/common";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ListPage from './ListPage';
// import EditPage from './EditPage';
// import AddTodoPage from './AddTodoPage';

function RouteList() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<Loading />}>
							<ToDoList />
						</Suspense>
					}
				/>

				<Route
					path="/add"
					element={
						<Suspense fallback={<Loading />}>
							<AddToDo />
						</Suspense>
					}
				/>
				{/* <Route path="/edit/:id" element={<EditPage />} /> */}
			</Routes>
		</Router>
	);
}

export default RouteList;
