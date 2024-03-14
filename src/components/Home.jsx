import React from "react";

const Home = (props) => {
  console.log("Home", props.data)
  return (
    <div>
      <div className="header-wrapper">
      <h1>React Redux</h1>
        <div className="cart-img">
          <img
            src="data:image/png;base64,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"
            alt="cart-img"
          /> <span className="total-items">{props.data.length}</span>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70"
            alt="phone"
          />
        </div>
        <div className="text-wrapper item">
          <span> Vivo V29e</span>
          <span>Price: $1000</span>
        </div>
        <div className="btn-wrapper">
          <button onClick={() => props.addToCartHendler({price:1000,name:'Vivo V29e'})}>Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
