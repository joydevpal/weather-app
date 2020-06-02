import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import WeatherData from "./components/WeatherData";

function App() {
	const [input, setInput] = useState("");
	const [location, setLocation] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setLocation(input);
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<Container maxWidth="md" style={{ marginTop: "100px", marginBottom: "100px" }}>
			<div className="App" style={{ textAlign: "center" }}>
				<form onSubmit={handleSubmit}>
					<TextField
						id="outlined-basic"
						label="Enter your city"
						variant="outlined"
						onChange={handleChange}
						style={{ marginRight: "15px" }}
					/>
					<Button
						type="submit"
						variant="contained"
						size="large"
						color="primary"
						style={{ padding: "14px 22px" }}
					>
						Show Weather
					</Button>
				</form>
				{location ? <WeatherData location={location} /> : ""}
			</div>
		</Container>
	);
}

export default App;
