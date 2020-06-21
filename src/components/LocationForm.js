import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormWrapper } from "../styles";

const LocationForm = ({ handleChange, handleSubmit }) => {
	return (
		<FormWrapper>
			<form onSubmit={handleSubmit}>
				<TextField
					id="outlined-basic"
					className="location"
					label="Enter your city"
					variant="outlined"
					onChange={handleChange}
				/>
				<Button type="submit" variant="contained" size="large" color="primary">
					Show Weather
				</Button>
			</form>
		</FormWrapper>
	);
};

export default LocationForm;
