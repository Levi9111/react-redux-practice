import { connect } from "react-redux";
import store from "../store";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(store) {
  return {
    balance: store.account.balance,
  };
}

console.log(store.account);
export default connect(mapStateToProps)(BalanceDisplay);
