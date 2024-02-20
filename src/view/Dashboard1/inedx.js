import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
import { getForm } from "../../Config/firebase";
import Navbar from "../navbar"; 
import "./App.css";
import {useDispatch } from "react-redux";
import { addToCart } from "../../store/Cartslice";
// import addToCart from "../addtocar";

function Dashboard1() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  // const [user, setUser] = useState("null");

  // useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
      // if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // setUser(user);
        // navigate("/dashboard1");
        // ...
      // } else {
        // setUser(null);
      // }
    // });
  // }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const form = await getForm();
    setProducts(form);
  };
  return (
    <div className="main-con">
      <Header />
      <Navbar/>

      {/* <div className="user"> */}
        {/* {user ?  */}
          {/* <h3>{user.email}</h3> */}
        {/* :  */}
          {/* <button onClick={() => navigate("/login")}>please log in</button>} */}
          {/* </div> */}

      {products.map((item) => (
        <div  className="card">
          <div className="card-image">
            <img src={item.imageUrl} alt="" />
          </div>
          <h2>RS{item.price}</h2>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <button onClick={() => dispatch(addToCart(item))}>
            Add To Cart
        </button>
        <button onClick={() =>navigate(`/detail1/${item.id}`)} key={item.id}>Detail</button>
        </div>
      ))}
       <br/>
      <Footer />
    </div>
  );
}

export default Dashboard1;
