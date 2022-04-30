import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = (state) => ({
    cardData: state.cartItem
})


export default connect(mapStateToProps, null)(Header);