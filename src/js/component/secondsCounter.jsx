import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./card.jsx";

const SecondsCounter = props => {
	const [counter, setCounter] = useState(0);

	const timer = () => {
		useEffect(() => {
			setInterval(() => {
				setCounter(counter => counter + 1);
			}, props.time);
		}, []);
	};

	if (counter < 10) {
		timer();
	} else {
		setCounter(0);
		timer();
	}

	return <Card time={props.time} content={counter} />;
};

SecondsCounter.propTypes = {
	time: PropTypes.number
};

export default SecondsCounter;
