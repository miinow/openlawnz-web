import React, { Component } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "../../../scss/Modal.scss";

class Modal extends Component {
	constructor(props) {
		super(props);
		this.clickMask = this.clickMask.bind(this);
		this.handleConfirm = this.handleConfirm.bind(this);
		this.handleCancel = this.handleCancel.bind(this);

		this.state = {
			visible: false
		};
	}

	componentDidMount() {
		this.setState({
			visible: this.props.visible
		});
	}

	// eslint-disable-next-line react/no-deprecated
	componentWillReceiveProps(nextProps, nextContext) {
		this.setState({ visible: nextProps.visible });
	}

	handleConfirm() {
		console.log("save");
		const { onConfirm } = this.props;

		onConfirm && onConfirm();
		this.setState({ visible: false });
	}

	handleCancel() {
		console.log("cancel");
		const { onCancel } = this.props;

		onCancel && onCancel();
		this.setState({ visible: false });
	}

	clickMask(e) {
		e.preventDefault();
		this.setState({ visible: false });
	}

	render() {
		const { title, children } = this.props;
		const { visible } = this.state;

		if (visible) {
			document.getElementsByTagName("body")[0].classList.add("prevent-scroll");
		} else {
			document.getElementsByTagName("body")[0].classList.remove("prevent-scroll");
		}

		return visible ? (
			<div className="modal-wrapper">
				<div className="modal">
					<div className="modal-title">
						{title || "titletitltitletitleetitletitletitletitletitletitletitletitle"}
					</div>
					{children}
					<div className="modal-button">
						<Button
							className="modal-button-confirm"
							onclick={this.handleConfirm}
							title={"Save"}
							colored={true}
						/>
						<Button
							className="modal-button-cancel"
							onclick={this.handleCancel}
							title={"Cancel"}
							colored={false}
						/>
					</div>
				</div>
				<div onClick={this.clickMask} className="modal-mask" />
			</div>
		) : null;
	}
}

export default Modal;

Modal.propTypes = {
	onConfirm: PropTypes.func,
	onCancel: PropTypes.func,
	title: PropTypes.string,
	visible: PropTypes.bool
};
