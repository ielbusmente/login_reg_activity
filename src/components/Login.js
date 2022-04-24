import React, { useState } from "react";

const Login = () => {
	const [studentNumb, setstudentNumb] = useState(``);
	const [password, setpassword] = useState(``);
	return (
		<div>
			<div id="login">
				<form>
					<div className="field-wrap">
						<label
							className={`${studentNumb !== "" ? `active highlight` : ``}`}
						>
							Student Number<span className="req">*</span>
						</label>
						<input
							type="text"
							required
							autoComplete="off"
							onChange={e => setstudentNumb(e.target.value)}
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
							onChange={e => setpassword(e.target.value)}
							value={password}
						/>
					</div>

					{/* <p className="forgot"><a href="#">Forgot Password?</a></p> */}

					<div className="buttons">
						<button
							className="button"
							onClick={() => {
								studentNumb !== "" && password !== "" && alert("Welcome");
							}}
						>
							Log In
						</button>
						<button
							type="button"
							className="button cancel"
							onClick={() => {
								setstudentNumb(``);
								setpassword(``);
							}}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
