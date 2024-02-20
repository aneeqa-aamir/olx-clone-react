// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs,deleteDoc, doc} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxVWHAM-Ektg2E1yMIvNdrexvmDadS_So",
  authDomain: "olxcom-65113.firebaseapp.com",
  projectId: "olxcom-65113",
  storageBucket: "olxcom-65113.appspot.com",
  messagingSenderId: "117289121303",
  appId: "1:117289121303:web:e67351fcb486591d4d4e52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export async function register(userInfo) {
  
    const { email, password, fullName, age } = userInfo;
    await createUserWithEmailAndPassword(auth, email, password);
    // Add a new document with a generated id.
    await addDoc(collection(db, "users"), {
      fullName,
      age,
      email,
    });

    // console.log({fullName}+{age})

    alert("successfully registered");
  } 


export async function login(userInfo) {
  
    const { email, password } = userInfo;
     await signInWithEmailAndPassword(auth, email, password);

    alert("Login successful");
  } 
  



export async function sellDetail(userInfo) {
  try {
    const { title, description, price, image } = userInfo;
    const imageArray = Array.from(image[0])
    const arr =[]
    for (let i = 0; i < imageArray.length; i++) {
      const file = imageArray[i]
    
    const storageRef = ref(storage, `form/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    console.log(`File ${i} uplode .download URL: ${url}`);
    arr.push(url)}
    // Add a new document with a generated id.
    await addDoc(collection(db, "form"), {
      title,
      description,
      price,
      imageUrl: arr,
    });
    alert("uploded");

    console.log({ title, description, price });
  } catch (e) {
    alert(e.message);
  }
}

export async function getForm() {
  const querySnapshot = await getDocs(collection(db, "form"));
  const form = [];
  querySnapshot.forEach((doc) => {
    const userInfo = doc.data();
    userInfo.id = doc.id;

    form.push(userInfo);
  });

  return form;
}

export async function ProfileData() {
  const querySnapshot = await getDocs(collection(db, "users"));
  const form = [];
  querySnapshot.forEach((doc) => {
    const userInfo = doc.data();
    userInfo.id = doc.id;

    form.push(userInfo);
  });

  return form;
}


export async function updateData(e,img) {
 console.log('e', e)
 console.log('img',img)
const userd=e[0]
  try {
    // const { title, description, price, image } = userInfo;

    const storageRef = ref(storage, `profile image/${img.name}`);
    await uploadBytes(storageRef, img);
    const url = await getDownloadURL(storageRef);
    // Add a new document with a generated id.
    await addDoc(collection(db, "users"), {
      fullName:userd.fullName,
      age:userd.age,
      email:userd.email,
      imageUrl: url,
    });

    const ver= await deleteDoc(doc(db,"users",userd.id));
    console.log('del',ver)
    alert("profile update");
  } catch (e) {
    alert(e.message);
  }
}