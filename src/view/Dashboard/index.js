// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../navbar";
// import Header from '../Header'
// import Footer from "../Footer";

// import "./App.css";

// function Dashboard() {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();
  

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = () => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((res) => setProducts(res.products));
//   };

//   return (
      
//     <div className="main-container">
//       <Header/>
//       <div><Navbar/></div>

//       {products.map(item => {
        
//         {/* console.log(item); */}
//         const { id, price, title, thumbnail } = item;
//         return (
//           <div className="card"  >
//             <div className="card-image">

//             <img src={thumbnail} alt="" />
//             </div>
//             <h2>RS{price}</h2>
//             <p>{title}</p>
//            <button className="card-button" onClick ={() => navigate(`/detail/${id}`)}>detail</button>
            
//           </div>
//         );
//       })}
//       <Footer/>
//     </div>
//   );
// }

// export default Dashboard;
