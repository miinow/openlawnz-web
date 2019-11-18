import React from "react";
import classNames from "classnames";

const ButtonGroup = props => {
	return (
		<div className={"button-group"}>
			<div className={classNames({ "button-selected": props.collected === "first" })} onClick={props.clickFirst}>
				{props.first}
			</div>
			<div className={classNames({ "button-selected": props.collected === "last" })} onClick={props.clickLast}>
				{props.last}
			</div>
		</div>
	);
};

export default ButtonGroup;
