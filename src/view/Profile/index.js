import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {ProfileData ,updateData } from "../../Config/firebase";
import Header from "../Header";
import Navbar from "../navbar";
import './App.css'

function Profile() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [image, setImage] = useState(null);
  const [img,setImg] = useState('');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email); // Assuming user.email is the email address
        const uid = user;
            setUser(uid.email);
            console.log(uid.email)

      } else {
        setUser("");
      }
    });
  }, []);

  useEffect(() => {
    FetchData();
    async function FetchData() {
      try {
        const Pdata = await ProfileData();
        const foundItem = Pdata.filter((res) => res.email === user);

        if (foundItem.length > 0) {
          setUserData(foundItem);
          console.log("found item",foundItem);
          setImage(foundItem[0].imageUrl);
        } else {
          setUserData([]);
          setImage(null);
        }
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    }
  }, [user]);
console.log("image",image);
  const go = async () => {
    await updateData(userData, img);
    navigate('/');
  };

  return (
    <div>
      <Header />
      <Navbar />

      
           {/* <div className="profile-photo-button"> */}
            {/* <div class="upload-btn-wrapper"> */}
        {/* <button class="btn">Upload File</button> */}
        {/* <input type="file"  onChange={(e) => setImg(e.target.files[0])} name="myfile" id="myfile" /> */}
    {/* </div> */}
    {/* </div> */}

      <div className="con1">
        <h2>Profile</h2>
        <img
         className="header-img"
         src={image ?` ${image}`:"https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"}
         alt="Profile"/>
        <div className="con2">
          <input
            className="file"
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          {/* <button class="btn">Upload File</button>  */}
          <br />
          <br />
          <br />
          <input type="text"
            className="input"
            value={userData.length > 0 ? userData[0].fullName : ''}
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />
          <br />
          <br />
          <input type="text"
            className="input"
            value={userData.length > 0 ? userData[0].age : ''}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <br />
          <br />
          <input
            className="input"
            placeholder="email"
            value={userData.length > 0 ? userData[0].email : ''}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <button onClick={go}>Save</button>
          <button onClick={() => navigate("/")}>Discard</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
