import React, { Component } from "react";
import Modal from "./Modal";

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

export default ModalWrapper;
