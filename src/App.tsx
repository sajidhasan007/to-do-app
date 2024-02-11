/** @format */

import RouteList from "./routes";
import { ConfigProvider, theme } from "antd";

const App = () => {
	return (
		<ConfigProvider
			theme={{
				// algorithm: theme.darkAlgorithm,
				token: {
					colorPrimary: "#424242",
				},
				components: {
					Table: {
						fontSize: 10,
						fontWeightStrong: 400,
						colorFillContent: "#075985",
						colorFillSecondary: "#075985",
						colorIconHover: "#f9f9f9",
					},
					// Pagination: {
					//   colorPrimary: "#424242",
					//   colorFillSecondary: "#075985",
					// },
					Menu: {
						colorPrimaryBg: "#e61f09",
					},
				},
			}}
		>
			<div className="content-container border border-red-500">
				<div>
					<RouteList />
				</div>
			</div>
		</ConfigProvider>
	);
};

export default App;
