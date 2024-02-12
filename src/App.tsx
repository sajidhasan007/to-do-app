/** @format */

import { TodoHeader } from "./components";
import RouteList from "./routes";
import { ConfigProvider } from "antd";

const App = () => {
	return (
		<ConfigProvider
			theme={{
				// algorithm: theme.darkAlgorithm,
				token: {
					colorPrimary: "#07789C",
					// colorTextLightSolid: "red",
				},
				components: {
					Switch: {
						// handleBg: "#075985",
					},
					// Button: {
					// 	// defaultBg: "#424242",
					// 	colorPrimary: "#424242",
					// },
					// Table: {
					// 	fontSize: 10,
					// 	fontWeightStrong: 400,
					// 	colorFillContent: "#075985",
					// 	colorFillSecondary: "#075985",
					// 	colorIconHover: "#f9f9f9",
					// },
					// Pagination: {
					//   colorPrimary: "#424242",
					//   colorFillSecondary: "#075985",
					// },
					// Menu: {
					// 	colorPrimaryBg: "#e61f09",
					// },
				},
			}}
		>
			<div className="content-container">
				<div>
					<TodoHeader />
					<RouteList />
				</div>
			</div>
		</ConfigProvider>
	);
};

export default App;
