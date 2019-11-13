import React from "react";
import classnames from "classnames";
import "../../../scss/Button.scss";

const Button = props => {
	const isColored = props.colored ? "button-colored" : "button-white";

	return (
		<button className={classnames("button", isColored, props.className)} onClick={props.onclick}>
			{props.title}
		</button>
	);
};

export default Button;
