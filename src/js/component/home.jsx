import React from "react";

//include images into your bundle
import Card from "./card.jsx";
import SecondsCounter from "./secondsCounter.jsx";

//create your first component

const Home = () => {
	return (
		<div className="container mt-3">
			<div className="row d-flex justify-content-center">
				<Card content={<i className="far fa-clock"></i>} />
				<SecondsCounter time={100000000} />
				<SecondsCounter time={10000000} />
				<SecondsCounter time={1000000} />
				<SecondsCounter time={100000} />
				<SecondsCounter time={10000} />
				<SecondsCounter time={1000} />
			</div>
		</div>
	);
};

export default Home;
