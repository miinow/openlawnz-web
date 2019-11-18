import React, { Component } from "react";
import Modal from "./Modal";
import Button from "./Button";

class ModalWrapper extends Component {
	constructor(p) {
		super(p);
		this.handleVisible = this.handleVisible.bind(this);
		this.clickButton = this.clickButton.bind(this);

		this.state = {
			visible: false,
			defaultVisible: false,
			buttonID: 0,
			buttonCollected: "existing"
		};
	}

	handleVisible(e) {
		const _this = this;
		this.setState({ buttonID: e.target.id, visible: true }, () => {
			console.log(` ${_this.state.visible}`);
		});
	}

	clickButton(e) {
		let value;
		if (e.target.innerHTML === "Existing Folder") {
			value = "existing";
		} else if (e.target.innerHTML === "New Folder") {
			value = "new";
		} else {
			value = "";
		}
		this.setState({ buttonCollected: value });
	}

	render() {
		return (
			<>
				<button onClick={this.handleVisible} id={1}>
					asdfasdfasdfasdfasdfasdfasdf
				</button>
				<button onClick={this.handleVisible} id={2}>
					asdfasdfasdfasdfasdfasdfasdf
				</button>
				<button onClick={this.handleVisible} id={3}>
					asdfasdfasdfasdfasdfasdfasdf
				</button>
				<Modal
					defaultVisible={this.state.defaultVisible}
					visible={this.state.visible}
					id={this.state.buttonID}
					key={this.state.buttonID}
				>
					<div className="modal-title">
						{this.props.title || "titletitltitletitleetitletitletitletitletitletitletitletitle"}
					</div>
					<p className="modal-text">Add to: </p>
					<Button.Group
						first={"Existing Folder"}
						last={"New Folder"}
						clickFirst={this.clickButton}
						clickLast={this.clickButton}
						collected={this.state.buttonCollected === "existing" ? "first" : "last"}
					/>
					<p className="modal-text">Select Folder:</p>
					<select className="modal-select" name="select-folder" id="">
						<option value="1">123123</option>
						<option value="2">2222</option>
						<option value="3">3333</option>
						<option value="4">4444</option>
					</select>
				</Modal>
			</>
		);
	}
}

export default ModalWrapper;
