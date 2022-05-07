import Registration from "./components/Registration";
import Login from "./components/Login";
import React, { useState, useEffect } from "react";
import "./App.scss";
import bcryptjs from "bcryptjs";

function App() {
	// conditions
	const [signup, setSignUp] = useState(false);

	// data
	const [student, setstudent] = useState({});
	const [deybateys, setdeybateys] = useState([
		{
			lastName: "Francisco",
			firstName: "Richmond Andrei",
			midName: "",
			studentNumber: "2018123456",
			college: "CICS",
			program: "BSIT",
			yearLevel: "4",
			password: "$2a$10$UpHaNUlLn3isdmM64Qpo5eKJHXiRyz/CvSr0WPoz6KVey9uHzhwiu",
		}, //123123aA
		{
			lastName: "Busmente",
			firstName: "Daniel",
			midName: "",
			studentNumber: "2018112067",
			college: "CICS",
			program: "BSIT",
			yearLevel: "4",
			password: "$2a$10$qUVpvnXPswwMdFk8C9dyWumIE9VgDSUkwmqBFt9Rm/Pa1pOynlyT6",
		}, //ustlang$4kaLam
	]);

	// functions
	const asin = bcryptjs.genSaltSync(10);
	function hash(pass) {
		return bcryptjs.hashSync(pass, asin);
	}
	function findUser(s) {
		const userFound = deybateys.find(user => user.studentNumber === s);
		// console.error(userFound);
		return userFound;
	}

	function auth(s, p) {
		const userFound = findUser(s);
		if (!userFound) return { passMatch: false };
		const check = bcryptjs.compareSync(p, userFound.password);
		if (!check) return { passMatch: false };
		return { passMatch: true, user: userFound };
	}

	function bahalaSaLogout() {
		setstudent({});
	}

	function rehistro(
		lastName,
		firstName,
		midName,
		studentNumber,
		college,
		program,
		yearLevel,
		p
	) {
		let tempArray = deybateys;
		tempArray.push({
			lastName,
			firstName,
			midName,
			studentNumber,
			college,
			program,
			yearLevel,
			password: hash(p),
		});
		setdeybateys(tempArray);
	}

	useEffect(() => {
		console.log(deybateys);
	}, [deybateys]);

	return (
		<>
			{student.studentNumber ? (
				<div
					style={{
						color: "#fff",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						textAlign: "center",
					}}
				>
					Logged In as{" "}
					{`${student.firstName} ${student.midName} ${student.lastName}`} <br />
					Student Number: {student.studentNumber}
					<br />
					College: {student.college}
					<br />
					Program: {student.program}
					<br />
					Year Level: {student.yearLevel}
					<br />
					Hashed Password: {student.password}
					<br />
					<button onClick={bahalaSaLogout} className="button logout">
						Log out
					</button>
				</div>
			) : (
				<div className="form">
					<ul className="tab-group">
						<li className={`tab ${!signup ? "active" : ""}`}>
							<div onClick={() => setSignUp(false)} className="btlrad">
								Log In
							</div>
						</li>
						<li className={`tab ${signup ? "active" : ""} `}>
							<div onClick={() => setSignUp(true)} className="btrrad">
								Sign Up
							</div>
						</li>
					</ul>
					<div className="tab-content">
						{signup ? (
							<Registration findUser={findUser} rehistro={rehistro} />
						) : (
							<Login setstudent={setstudent} auth={auth} />
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default App;
