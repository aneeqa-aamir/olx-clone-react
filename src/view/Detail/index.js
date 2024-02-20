// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import "./App.css"



// function Detail() {
//   const { adId } = useParams();
//   const [product, setProduct] = useState();

//   useEffect(() => {

//     getProduct();
//   }, []); // Include adId as a dependency to re-fetch data when it changes

//   const getProduct = () => {
//     fetch(`https://dummyjson.com/products/${adId}`)  // Fixed the URL by using template literals
//       .then((res) => res.json())
//       .then((res) => setProduct(res));
//   };

  
  

//   return (
//     <div >
      
//       {!product ? (
//   <h2>Loading...</h2>
// ) : (
  
//   <div className='container' >
//     <div className='main'>
//    <div className='imag'><img src={product.images[1]} alt={product.title} /></div>{/* Assuming images is a string, adjust i/o */}
//     <div className='detail'>
//     <h2 className='left'>{product.title}</h2>  {/* Access title from the product object */}
//     <h3 className='left'>{product.price}</h3>  {/* Assuming price is a property in the product object */}
//     <h4 className='left'>{product.description}</h4>  {/* Assuming description is a property in the product object */}
//     </div>
//     </div>

//     <div className='main2'>
//     <img  className="profile" src='https://www.freeiconspng.com/thumbs/profile-icon-png/-avatar-people-person-profile-user-women-icon--icon-search-engine-23.png' alt=''/>
//     <ul>
//       <li><h2>aneeqa</h2></li> <br/>
//       <li><p>member since 2012</p></li> <br/>
//       <li><h3>see profile</h3></li><br/>
//     </ul>

//     </div>

//     {/* <Footer/> */}

//   </div>
 
//        )}
      
      
//     </div>
    
  
//   );
// }

// export default Detail;











