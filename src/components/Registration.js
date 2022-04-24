import React, { useState } from "react";

const Registration = () => {
	const [studentNumb, setstudentNumb] = useState(``);
	const [lastName, setlastName] = useState(``);
	const [firstName, setfirstName] = useState(``);
	const [middleName, setmiddleName] = useState(``);
	const [college, setcollege] = useState(``);
	const [program, setprogram] = useState(``);
	const [yearLevel, setyearLevel] = useState(``);
	const [password, setpassword] = useState(``);
	const [confirmPassword, setConfirmPassword] = useState(``);

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div>
			<div id="signup">
				<form onSubmit={handleSubmit}>
					<div className="row row-3">
						<div className="field-wrap">
							<label className={`${lastName !== "" ? `active highlight` : ``}`}>
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
								className={`${studentNumb !== "" ? `active highlight` : ``}`}
							>
								Student Number (used for log in)<span className="req">*</span>
							</label>
							<input
								type="number"
								required
								maxLength={10}
								autoComplete="off"
								onChange={e => {
									return !e.target.value.includes("e")
										? setstudentNumb(e.target.value)
										: setstudentNumb("");
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
								type="text"
								required
								autoComplete="off"
								onChange={e => setyearLevel(e.target.value)}
								value={yearLevel}
							/>
						</div>
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

					<div className="field-wrap">
						<label
							className={`${confirmPassword !== "" ? `active highlight` : ``}`}
						>
							Confirm Password<span className="req">*</span>
						</label>
						<input
							type="password"
							required
							autoComplete="off"
							onChange={e => setConfirmPassword(e.target.value)}
							value={confirmPassword}
						/>
					</div>

					<div className="buttons">
						<button
							className="button"
							onClick={() => {
								studentNumb !== "" &&
									firstName !== "" &&
									lastName !== "" &&
									middleName !== "" &&
									college !== "" &&
									program !== "" &&
									yearLevel !== "" &&
									password !== "" &&
									confirmPassword !== "" &&
									alert("Inputted Details are being saved");
							}}
						>
							Submit
						</button>
						<button
							type="button"
							className="button cancel"
							onClick={() => {
								setstudentNumb(``);
								setfirstName(``);
								setlastName(``);
								setmiddleName(``);
								setcollege(``);
								setprogram(``);
								setyearLevel(``);
								setpassword(``);
								setConfirmPassword(``);
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

export default Registration;
