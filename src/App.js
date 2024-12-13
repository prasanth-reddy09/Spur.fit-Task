import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { GraphProvider } from "./components/GraphProvider";

function App() {
	return (
		<GraphProvider>
			<div className="App  px-10 w-screen ">
				<Header />
				<Main />
			</div>
		</GraphProvider>
	);
}

export default App;
