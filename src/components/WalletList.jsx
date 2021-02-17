import React, { Component } from 'react';
import { personal_wallet } from "./db/db.json";

const Wallet = props => (
    console.log(props),
  <tr>
    <td>{props.wallet.userId}</td>
    <td>{props.wallet.name}</td>
    <td>{props.wallet.phone}</td>
    <td>{props.wallet.amount}</td>
  </tr>
)

export default class WalletList extends Component {
  constructor(props) {
    super(props);
  }

  WalletList() {
    return personal_wallet.map(wallet => {
      return <Wallet wallet={wallet} key={wallet.userId}/>;
    })
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>User ID</th>
              <th>name</th>
              <th>phone</th>
              <th>Balance (Rs)</th>
            </tr>
          </thead>
          <tbody>
            { this.WalletList() }
          </tbody>
        </table>
      </div>
    )
  }
}