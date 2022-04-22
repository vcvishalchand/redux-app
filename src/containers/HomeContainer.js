import { connect } from 'react-redux';
import Home from '../components/Home';
import { addToCart, removeToCart } from '../redux/actions/action';

const mapStateToProps=state =>({
    cartData: state.cardItem
})
const mapDispatchToProps=dispatch=>({
    addToCardHandler:data=>dispatch(addToCart(data)),
    removeToCardHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home;