import React, { Component } from "react";
import { Select, Row, Col, Alert } from "antd";
import { personal_wallet } from "./db/db.json";
import "antd/dist/antd.css";
import "../App.css";

const { Option } = Select;
// styles
const seletedPartWraper = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
};
export default class CheckBalance extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
            wallet : {
                userId: '',
                name: '',
                amount: '',
                phone: ''
            }
            
		};
	}
	show = false;

	handleOnChange = (value, type) => {
		let inputData = this.state;
		inputData[type] = value;
		this.setState({ ...inputData });
		
	};

    onSubmit = (e) => {
        e.preventDefault();
        // finding wallet from Data
        var walletObj = personal_wallet.find(
			(wallet) => wallet.name == this.state.user);
		if (walletObj) {
			this.setState({
				...this.state,
				wallet: walletObj,
			});
		}
        console.log(this.state.wallet);
    }
	// filtered part for view
	filteredPart = () => {
		let wallet = this.state.wallet;
		if (wallet.userId) {
			return (
				<div style={{ width: "50%", margin: "1rem auto" }}>
					<div style={seletedPartWraper}>
						<span>Name : </span>
						<span>{wallet.name}</span>
					</div>
                    <div style={seletedPartWraper}>
						<span>amout : </span>
						<span>{wallet.amount}</span>
					</div>
                    <div style={seletedPartWraper}>
						<span>Phone : </span>
						<span>{wallet.phone}</span>
					</div>
				</div>
			);
		} else {
			return (
				<div style={{ margin: "2rem",display:'flex',justifyContent:'center' }}>
					Please Select user
				</div>
			)
		}
	};
	render() {
		return (
			<div>
                <form onSubmit={this.onSubmit}>
                    <Row style={{ alignContent:'center',display:'flex',justifyContent:'center'}}>
                        <Col span={12}>
                            <Select
                                showSearch
                                style={{ width: 300 }}
                                placeholder="Select User"
                                onChange={(e) => this.handleOnChange(e, "user")}
                            >
                                {
                                    personal_wallet.map((transaction)=>{
                                        return <Option key={transaction.userId} value={transaction.name}>{transaction.name}</Option>
                                    })
                                }
                            </Select>
                        </Col>
                        <Col>
                            <input type="submit" value="Get Balance" className="btn btn-primary" />
                        </Col>
                    </Row>
                </form>
				<Row>
					<Col span={24}>{this.filteredPart()}</Col>
				</Row>
			</div>
		);
	}
}
