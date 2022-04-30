const Home = (props) => {
    console.log("props", props);
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() =>
                            props.addToCartHandler({ price: 500, name: 'I phone' })
                        }
                    > Add To Cart</button>
                    <button
                        onClick={()=> props.removeToCartHandler()}
                    className="remore-btn"> Remove To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;