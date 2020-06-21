import styled from "styled-components";

export const FormWrapper = styled.div`
	.location {
		margin-right: 15px;
	}
	button {
		padding: 14px 22px;
	}
`;

export const WeatherContainer = styled.div`
	.MuiPaper-root {
		background: linear-gradient(to bottom, #122259 0%, #9662a2 100%);
		padding: 25px;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		color: #fff;
	}
	.location {
		font-size: 24px;
		font-weight: 700;
		line-height: 30px;
	}
	.date {
		font-weight: 500;
	}
	.temperature {
		font-size: 30px;
		font-weight: 700;
	}
	.additional-info {
		overflow: hidden;
		margin-left: -10px;
	}
	.additional-info li {
		width: calc(50% - 10px);
		float: left;
		color: #fff;
		background: rgba(255, 255, 255, 0.2);
		margin-left: 10px;
		margin-bottom: 10px;
		text-align: center;
		font-size: 12px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.additional-info li img {
		max-height: 30px;
		margin-bottom: 7px;
	}
	.weather-status {
		text-transform: capitalize;
		font-size: 18px;
		margin-bottom: 15px;
	}
`;
