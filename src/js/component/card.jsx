import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="col-md-1">
			<div className="card text-white bg-dark">
				<div className="card-body text-center display-5">
					{props.content}
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	content: PropTypes.node
};

export default Card;
