import "./App.css";
import NavBarLayout from "./components/nav/NavBar";
import SideNav from "./components/nav/SideNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Wallets from "./components/WalletList";
import CreateWallet from "./components/CreateWallet";
import AddFunds from "./components/AddFunds";
import SpendFunds from "./components/SpendFunds";
import CheckBalance from "./components/CheckBalance";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <Router>
      <div>
        <NavBarLayout />
        <Row>
          <Col md="2">
            <SideNav />
          </Col>
          <Col md="8">
            <Container className="pt-4">
            <Route path="/list" exact component={Wallets} />
            <Route path="/create" exact component={CreateWallet} />
            <Route path="/addfund" exact component={AddFunds} />
            <Route path="/spendfund" exact component={SpendFunds} />
            <Route path="/checkbalance" exact component={CheckBalance} />
            <Route path="/transactionlist" exact component={TransactionList} />
            </Container>
          </Col>
        </Row>
        {/* <br /> */}
      </div>
    </Router>
  );
}

export default App;
