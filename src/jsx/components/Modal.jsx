import React, { Component } from "react";
import Button from "./Button";
import "../../scss/Modal.scss";

class ModalWrapper extends Component {
	constructor(p) {
		super(p);
		this.handleVisible = this.handleVisible.bind(this);
		this.state = {
			visible: false
		};
	}

	handleVisible() {
		this.setState({ visible: true });
	}

	render() {
		return (
			<>
				<button onClick={this.handleVisible}>asdfasdfasdfasdfasdfasdfasdf</button>
				<Modal visible={this.state.visible} />
			</>
		);
	}
}

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
		this.setState(
			{
				visible: this.props.visible
			},
			() => console.log("didmount" + this.state.visible)
		);
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
		const { onClose } = this.props;

		onClose && onClose();
		this.setState({ visible: false });
	}

	clickMask(e) {
		e.preventDefault();
		this.setState({ visible: false });
	}

	render() {
		const { title, children } = this.props;
		const { visible } = this.state;

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
		) : (
			""
		);
	}
}

export default ModalWrapper;
