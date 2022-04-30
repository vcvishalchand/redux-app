import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart, removeToCart } from "../redux/actions/action";

const mapStateToProps = (state) => ({
    cardData: state
})
const mapDispatchToProps = (dispatch) => {
    return {
        addToCartHandler: (data) => {
            dispatch(addToCart(data));
        },
        removeToCartHandler: (data) => {
            dispatch(removeToCart(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);