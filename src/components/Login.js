import React, { useState } from "react";

const Login = ({ setstudent, auth }) => {
	const [studentNumb, setstudentNumb] = useState(``);
	const [password, setpassword] = useState(``);
	const [error, seterror] = useState(false);
	function handleLogin(e) {
		e.preventDefault();

		seterror("");
		const manggagamit = auth(studentNumb, password);
		if (!manggagamit.passMatch) seterror(true);
		setstudent(manggagamit.user);
		alert("Welcome");
	}
	return (
		<div>
			<div id="login">
				<form onSubmit={handleLogin}>
					<div className="field-wrap">
						<label
							className={`${studentNumb !== "" ? `active highlight` : ``}`}
						>
							Student Number<span className="req">*</span>
						</label>
						<input
							type="number"
							required
							autoComplete="off"
							onChange={e => {
								setstudentNumb(e.target.value);
								seterror(false);
							}}
							value={studentNumb}
						/>
					</div>

					<div className="field-wrap">
						<label className={`${password !== "" ? `active highlight` : ``}`}>
							Password<span className="req">*</span>
						</label>
						<input
							type="password"
							required
							autoComplete="off"
							onChange={e => {
								setpassword(e.target.value);
								seterror(false);
							}}
							value={password}
						/>
					</div>

					{/* <p className="forgot"><a href="#">Forgot Password?</a></p> */}

					<div className="buttons">
						<button className="button">Log In</button>
						<button
							type="button"
							className="button cancel"
							onClick={() => {
								setstudentNumb(``);
								setpassword(``);
								seterror(false);
							}}
						>
							Cancel
						</button>
					</div>
					<div
						style={{ visibility: error ? "visible" : "hidden" }}
						className="error-msg"
					>
						<span>Student Number/Password is incorrect</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
