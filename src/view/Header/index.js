import { useState, useEffect } from "react";
import "./App.css"; // Import your stylesheet
// import Login from '../Login';
// import sellform from '../Login';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { ProfileData, updateData } from "../../Config/firebase";
import {useSelector} from "react-redux"


function Header() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  const [image, setImage] = useState();
  const [user, setUser] = useState("null");
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(user.email);
        // navigate("/dashboard1");
        console.log("user", user);
        // ...
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    FetchData();

    async function FetchData() {
      try {
        const Pdata = await ProfileData();
        console.log("Profile data:", Pdata);

        const foundItem = Pdata.filter((res) => res.email === user);
        console.log("Found item:", foundItem);

        if (foundItem.length > 0) {
          setUserData(foundItem);
          setImage(foundItem[0].imageUrl);
          console.log("Image set:", foundItem[0].imageUrl);
        } else {
          setUserData([]);
          setImage(null);
        }
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    }
  }, [user, image]);

  console.log("image header", image);
  const logOut = async () => {
    console.log("chal raha hy");
    const auth = getAuth();
    await signOut(auth);

    setUser(null);
  };

  return (
    <div className="olx-header">
      <div className="olx-header-container">
        <div className="olx-logo" onClick={() => navigate("/")}>
          <img
            src="https://www.liblogo.com/img-logo/ol8430f3c1-olx-logo-file-olx-new-logo-png-wikimedia-commons.png"
            alt="OLX Logo"
          />
        </div>
        <div className="olx-search">
          <input
            type="text"
            placeholder="Search for items, brands, and categories"
          />
          {/* <button type="button">Search</button> */}
          <div className="cart" style={{paddingLeft:"10px",cursor:"pointer"}} onClick={(e)=> navigate("/addtocart")} >
            {/* <img 
            width="50"
            height="50"
            src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" /> */}
            <i class="fa-solid fa-cart-shopping fa-2xl"></i>
           <h3 style={{color:"dark blue"}}> {cart.length}</h3>
          
        </div>
        </div>
        <div className="olx-actions">
          {/* <div className="user"> */}
          {user ? (
            <img
              style={{ height: "auto", width: "40px" }}
              src={
                image
                  ? ` ${image}`
                  : "https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
              }
            />
          ) : (
            <button
              className="login"
              type="button"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}

          {user ? (
            <div className="parent">
              <div className="child">
                <div className="pimage">
                  <img
                    style={{ height: "auto", width: "40px" }}
                    src={
                      image
                        ? ` ${image}`
                        : "https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                    }
                  />
                </div>
                <hr />
                <div className="pdata">
                  <ul>
                    <li>Hello!</li>
                    <li>{user}</li>
                    <li onClick={() => navigate("/Profile")}>
                      view and edit your profile
                    </li>
                  </ul>
                </div>
                <button
                  className="login"
                  type="button"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
         

          <button
            className="sell"
            type="button"
            onClick={() => navigate("/sellform")}
          >
            + Sell
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
