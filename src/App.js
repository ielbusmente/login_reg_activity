import Registration from "./components/Registration";
import Login from "./components/Login";
import { useState } from "react";
import "./App.scss";

function App() {
	const [signup, setSignUp] = useState(false);
	return (
		<div className="form">
			<ul className="tab-group">
				<li className={`tab ${!signup ? "active" : ""}`}>
					<div onClick={() => setSignUp(false)} className="btlrad">
						Log In
					</div>
				</li>
				<li className={`tab ${signup ? "active" : ""} `}>
					<div onClick={() => setSignUp(true)} className="btrrad">
						{" "}
						Sign Up
					</div>
				</li>
			</ul>
			<div className="tab-content">{signup ? <Registration /> : <Login />}</div>
		</div>
	);
}

export default App;
