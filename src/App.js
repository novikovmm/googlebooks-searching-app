import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import BookPage from "./pages/BookPage";

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='/book/:id' element={<BookPage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
