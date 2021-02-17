import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";

export default class CreateWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      amount: ''
    }
  }

  onChangeName = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onChangePhone = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  onChangeAmount = (e) => {
    this.setState({
      duration: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const wallet = {
      name: this.state.name,
      phone: this.state.phone,
      amount: this.state.amount
    }

    window.location = '/';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <Row>
              <Col md={2}>
                <label>Name : </label>
              </Col>
              <Col md={6}>
                <input type="text"
                  onChange={this.onChangeName}
                />
              </Col>
            </Row>
          </div>
          <div className="form-group">
            <Row>
              <Col md={2}>
                <label>Phone: </label>
              </Col>
              <Col md={6}>
                <input type="text"
                  onChange={this.onChangePhone}
                />
              </Col>
            </Row>
          </div>
          <div className="form-group">
            <Row>
              <Col md={2}>
                <label>Amount : </label>
              </Col>
              <Col md={6}>
                <input type="text"
                  onChange={this.onChangeAmount}
                />
              </Col>
              <Col md={4}>
                <input type="submit" value="Submit" className="btn btn-primary" />
              </Col>
            </Row>
          </div>
        </form>
      </div>
    )
  }
}