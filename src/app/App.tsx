import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { AppBody } from "./AppBody";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

const queryClient = new QueryClient();

/**
 * The top level component of the application. Sets up the query provider so that
 * React Query can be used. Sets up the mantine provider so that mantine themes can
 * be used. Sets up the browser router so that the Router Router can be used. Creates
 * a header and a body for the application
 */
export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles>
				<BrowserRouter>
					<div
						// These styles ensure that that components are center properly and
						// so that flex styles work correctly for the egg tables.
						style={{
							position: "fixed",
							top: "0",
							right: "0",
							bottom: "0",
							left: "0",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<AppHeader />

						<AppBody />

						<AppFooter />
					</div>
				</BrowserRouter>
			</MantineProvider>
		</QueryClientProvider>
	);
}
