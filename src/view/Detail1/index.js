import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import {doc, getDoc, getFirestore } from "firebase/firestore";
import './App.css'
import Footer from '../Footer';
import Header from '../Header';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';
import { Zoom, Navigation, Pagination } from 'swiper/modules';


function Detail1() {
  const db = getFirestore()
  const {id} = useParams()
  const [product,setProduct]= useState()

  useEffect(() => {
    getProduct()
  },[])

  const getProduct = async () => {
    try{

    const docRef = doc(db, "form", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  setProduct(docSnap.data())
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

  }
catch(e){

    alert(e.message);
}
}
console.log(product,"product")


  return (
    <div>
    <div><Header/></div>
    
  {!product ? (
    <h2>Loading...</h2>
  ):(
    <div className='container'>
      <div className='main'>
        <div className='imag'>
        { (
        <Swiper
        rewind={true}
        style={{
          '--swiper-navigation-color': 'white',
          '--swiper-pagination-color': 'white',
          
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
     {
  product.imageUrl.map((item, index) => (
    <SwiperSlide >
      <div className="swiper-zoom-container sllider">
        <img src={item}  />
      
      </div>
    </SwiperSlide>
  ))
} 
      </Swiper>
      )}


        {/* <img src={product.imageUrl} alt={'image product'}/> */}
        </div>
        <div className='detail'>
          <h2 className='left'>{product.tittle}</h2>
          <h3 className='left'>{product.price}</h3>
          <h4 className='left'>{product.description}</h4>
        </div>
      </div>
      <div className='main2'>
      <div className='prof-img'>
<img  className="profile" src='https://www.freeiconspng.com/thumbs/profile-icon-png/-avatar-people-person-profile-user-women-icon--icon-search-engine-23.png' alt=''/>
</div>
<div className='prof-detail'><ul>
  <li><h2>aneeqa</h2></li> <br/>
  <li><p>member since 2012</p></li> <br/>
  <li><h3>see profile</h3></li><br/>
</ul>
</div>
</div>


    </div>

  )}
    

  <Footer/>
      
    </div>
  )
}

export default Detail1
