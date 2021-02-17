import React from 'react'
import './nav.css'
import { Nav } from 'react-bootstrap'

function SideNav() {
    return (
        <Nav defaultActiveKey="/list" v className="sidenav flex-column" >
            <Nav.Link  className="navLinks" href="/list">All Wallets</Nav.Link>
            <Nav.Link  className="navLinks" href="/create">New Wallet</Nav.Link>
            <Nav.Link className="navLinks" href="/checkbalance">Check Balance</Nav.Link>
            <Nav.Link className="navLinks" href="/addfund">Add Funds</Nav.Link>
            <Nav.Link className="navLinks" href="/spendfund">Spend Funds</Nav.Link>
            <Nav.Link className="navLinks" href="/transactionlist">All Transactions</Nav.Link>
        </Nav>
    )
}

export default SideNav
