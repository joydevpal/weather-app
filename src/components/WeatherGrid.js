import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import WeatherInfo from "./WeatherInfo";
import AdditionalInfo from "./AdditionalInfo";

const WeatherGrid = (info) => {
	return (
		<Grid item md={4} key={info.id} className="weather-info-grid">
			<Paper>
				<WeatherInfo info={info} />
				<AdditionalInfo info={info} />
			</Paper>
		</Grid>
	);
};

export default WeatherGrid;
