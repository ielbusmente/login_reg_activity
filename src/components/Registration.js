import React, { useState } from "react";

const Registration = ({ findUser, rehistro }) => {
	const [studentNumb, setstudentNumb] = useState(``);
	const [lastName, setlastName] = useState(``);
	const [firstName, setfirstName] = useState(``);
	const [middleName, setmiddleName] = useState(``);
	const [college, setcollege] = useState(``);
	const [program, setprogram] = useState(``);
	const [yearLevel, setyearLevel] = useState(``);
	const [password, setpassword] = useState(``);
	const [confirmPassword, setConfirmPassword] = useState(``);

	const [error, seterror] = useState(``);
	const [studentNumberror, setstudentNumberror] = useState(``);
	const [passwordError, setpasswordError] = useState(``);
	const [passwordConfError, setpasswordConfError] = useState(``);

	function isPasswordValid() {
		return (
			password.match(/[a-z]+/) &&
			password.match(/[0-9]+/) &&
			password.match(/[A-Z]+/) &&
			password.match(/[$&+,:;=?@#|'<>.^*()%!-]+/) &&
			password.length >= 8 &&
			password.length <= 20
		);
	}

	function handleSubmit(e) {
		e.preventDefault();
		seterror("");
		setstudentNumberror("");
		setpasswordError("");
		setpasswordConfError("");

		const invalidStudentNumber = findUser(studentNumb);
		const passwordValid = isPasswordValid();
		const passwordsMatch = password === confirmPassword;

		if (invalidStudentNumber || !passwordValid || !passwordsMatch) {
			let errorString = "";
			if (invalidStudentNumber) {
				setstudentNumberror("error-input");
				errorString += "Student Number already registered\n";
			}
			if (!passwordValid) {
				setpasswordError("error-input");
				errorString +=
					"Password should have atleast 8 character and not more than 20 - atleast including a number, a special character, an upper and lowercase letter\n";
			}
			if (!passwordsMatch) {
				setpasswordError("error-input");
				setpasswordConfError("error-input");
				errorString += "Passwords do not match\n";
			}
			return seterror(errorString);
		}

		rehistro(
			lastName,
			firstName,
			middleName,
			studentNumb,
			college,
			program,
			yearLevel,
			password
		);
		const temp = studentNumb;
		alert("Inputted Details are being saved");
		clrea();
		alert(`Student Number ${temp} successfully registerd.`);
	}

	function clrea() {
		setstudentNumb(``);
		setfirstName(``);
		setlastName(``);
		setmiddleName(``);
		setcollege(``);
		setprogram(``);
		setyearLevel(``);
		setpassword(``);
		setConfirmPassword(``);
		seterror("");
		setstudentNumberror("");
		setpasswordError("");
		setpasswordConfError("");
	}
	return (
		<div>
			<div id="signup">
				<form onSubmit={handleSubmit}>
					<div className="row row-3">
						<div className="field-wrap">
							<label
								className={`${lastName !== "" ? `active highlight` : ``} `}
							>
								Last Name<span className="req">*</span>
							</label>
							<input
								type="text"
								required
								autoComplete="off"
								onChange={e => setlastName(e.target.value)}
								value={lastName}
							/>
						</div>

						<div className="field-wrap">
							<label
								className={`${firstName !== "" ? `active highlight` : ``}`}
							>
								First Name<span className="req">*</span>
							</label>
							<input
								type="text"
								required
								autoComplete="off"
								onChange={e => setfirstName(e.target.value)}
								value={firstName}
							/>
						</div>
						<div className="field-wrap">
							<label
								className={`${middleName !== "" ? `active highlight` : ``}`}
							>
								Middle Name<span className="req">*</span>
							</label>
							<input
								type="text"
								required
								autoComplete="off"
								onChange={e => setmiddleName(e.target.value)}
								value={middleName}
							/>
						</div>
					</div>

					<div className="row row-2">
						<div className="field-wrap">
							<label
								className={`${studentNumb !== "" ? `active highlight` : ``} `}
							>
								Student Number (used for log in)<span className="req">*</span>
							</label>
							<input
								type="number"
								required
								max={9999999999}
								min={1000000000}
								className={`${studentNumberror}`}
								autoComplete="off"
								onChange={e => {
									setstudentNumb(e.target.value);
								}}
								value={studentNumb}
							/>
						</div>
						<div className="field-wrap">
							<label className={`${college !== "" ? `active highlight` : ``}`}>
								College<span className="req">*</span>
							</label>
							<input
								type="text"
								required
								autoComplete="off"
								onChange={e => setcollege(e.target.value)}
								value={college}
							/>
						</div>
					</div>
					<div className="row row-2">
						<div className="field-wrap">
							<label className={`${program !== "" ? `active highlight` : ``}`}>
								Program Enrolled<span className="req">*</span>
							</label>
							<input
								type="text"
								required
								autoComplete="off"
								onChange={e => setprogram(e.target.value)}
								value={program}
							/>
						</div>

						<div className="field-wrap">
							<label
								className={`${yearLevel !== "" ? `active highlight` : ``}`}
							>
								Year Level<span className="req">*</span>
							</label>
							<input
								type="number"
								required
								autoComplete="off"
								onChange={e => setyearLevel(e.target.value)}
								value={yearLevel}
							/>
						</div>
					</div>

					<div className="field-wrap">
						<label className={`${password !== "" ? `active highlight` : ``}  `}>
							Password<span className="req">*</span>
						</label>
						<input
							type="password"
							required
							autoComplete="off"
							className={`${passwordError}`}
							onChange={e => setpassword(e.target.value)}
							value={password}
						/>
					</div>

					<div className="field-wrap">
						<label
							className={`${confirmPassword !== "" ? `active highlight` : ``} `}
						>
							Confirm Password<span className="req">*</span>
						</label>
						<input
							type="password"
							required
							autoComplete="off"
							className={`${passwordConfError}`}
							onChange={e => setConfirmPassword(e.target.value)}
							value={confirmPassword}
						/>
					</div>

					<div className="buttons">
						<button className="button">Submit</button>
						<button type="button" className="button cancel" onClick={clrea}>
							Cancel
						</button>
					</div>
					<div
						style={{ visibility: error ? "visible" : "hidden" }}
						className="error-msg"
					>
						<span>{error}</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Registration;
