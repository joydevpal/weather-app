import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import WeatherData from "./components/WeatherData";
import LocationForm from "./components/LocationForm";

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
				<LocationForm handleChange={handleChange} handleSubmit={handleSubmit} />
				{location ? <WeatherData location={location} /> : ""}
			</div>
		</Container>
	);
}

export default App;
