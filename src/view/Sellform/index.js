import React from "react";
import { useState } from "react";
import { sellDetail } from "../../Config/firebase";
import { useNavigate } from "react-router-dom";

import "./App.css";
//
export default function Sell() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image,setImage] = useState()
  const navigate = useNavigate();

  // const navigate = useNavigate();
  //
  const StartSell = async () => {
    await sellDetail({ title, description, price ,image});
    navigate("/")
  };
  return (
    <div>
      <div className="sdetail">
        <h2 className="heading">Enter Item Detail</h2>
        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <br />
        <br />
        <br />
        <input
          type="number"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br /> <br />
        <br />
        <br />
        {/* <label for="w3review"></label> */}
        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <br />
        <br />
        <br />
        <input type="file" onChange={(e) => setImage([e.target.files])} multiple/>
        <div className="btn">
          <button onClick={StartSell}>Post</button> <br />
          <button onClick={() => navigate("/")}>cancel</button>
        </div>
      </div>
    </div>
  );
}
