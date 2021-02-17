import React, { Component } from 'react';
import { transactions } from "./db/db.json";

const Wallet = props => (
    console.log(props),
  <tr>
    <td>{props.wallet.name}</td>
    <td>{props.wallet.date}</td>
    <td>{props.wallet.amount}</td>
    <td>{props.wallet.balance}</td>
  </tr>
)

export default class TransactionList extends Component {
  constructor(props) {
    super(props);
  }

  WalletList() {
    return transactions.map(wallet => {
      return <Wallet wallet={wallet} key={wallet.userId}/>;
    })
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
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