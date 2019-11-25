import React, { Component } from "react";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

const options = ["1111", "2222", "3333", "4444"];

class ModalWrapper extends Component {
	constructor(p) {
		super(p);
		this.handleVisible = this.handleVisible.bind(this);
		this.clickButton = this.clickButton.bind(this);
		this.reset = this.reset.bind(this);
		this.clickMask = this.clickMask.bind(this);
		this.onConfirm = this.onConfirm.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onSelect = this.onSelect.bind(this);

		this.state = {
			visible: false,
			defaultVisible: false,
			buttonID: 0,
			buttonCollected: "existing",
			selectValue: ""
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

	reset() {
		this.setState({ buttonCollected: "existing" });
		this.setState({ visible: false });
	}

	clickMask() {
		this.reset();
	}

	onConfirm() {
		console.log("wrapperModal click save");
		this.reset();
	}

	onCancel() {
		console.log("wrapperModal click cancel");

		this.reset();
	}

	onSelect(v) {
		this.setState({
			selectValue: v
		});
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
					onConfirm={this.onConfirm}
					onCancel={this.onCancel}
					clickMask={this.clickMask}
					reset={this.reset}
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
					{this.state.buttonCollected === "existing" ? (
						<>
							<p className="modal-text">Select Folder:</p>
							<Select
								className="modal-select"
								onSelect={this.onSelect}
								size="big"
								options={options}
								placeholder={"placehosererer"}
							/>
						</>
					) : (
						<>
							<p className="modal-text">Enter new folder name: </p>
							<Input onEnter={this.onConfirm} className="modal-input" placeholder={"New folder name"} />
						</>
					)}
				</Modal>
			</>
		);
	}
}

export default ModalWrapper;
