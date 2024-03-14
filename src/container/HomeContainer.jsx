import {connect} from 'react-redux'
import {addToCart} from '../service/actions/Actions'
import Home from  '../components/Home';


const mapStateToProps = state => ({
    data: state.cart
})

const mapDispatchToProps = disptch => ({
    addToCartHendler: data => disptch(addToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home;
