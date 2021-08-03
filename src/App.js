import './App.css';
import {BrowserRouter as Router,Link,Switch,Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import HomeContents from './components/HomeContents';
import AllPics from './components/AllPics';
import FirstImage from './components/FirstImage';

import React, { useState } from "react";
import { storage } from "./firebase/firebase";
import FamilyPics from './components/FamilyPics';
import SignIn from './components/SignIn';
// import a from "./images/a.jpeg"

// export default function App() {
//   const [file, setFile] = useState(null);
//   const [url, setURL] = useState("");

//   function handleChange(e) {
//     setFile(e.target.files[0]);
//   }

//   function handleUpload(e) {
//     e.preventDefault();
//     const ref = storage.ref(`/images/${file.name}`);
//     const uploadTask = ref.put(file);
//     uploadTask.on("state_changed", console.log, console.error, () => {
//       ref
//         .getDownloadURL()
//         .then((url) => {
//           setFile(null);
//           setURL(url);
//         });
//     });
//   }

//   return (
//     <>
//     <div>
//       <form onSubmit={handleUpload}>
//         <input type="file" onChange={handleChange} />
//         <button disabled={!file}>upload to firebase</button>
//       </form>
//       <img src={url} alt="" />
//       {/* <img src={a} alt="" /> */}
//     </div>

//          <Router>
         
//        <Route exact path="/" component={Home} />
//        <Route path="/about" component={About} />
//        <Route path="/gallery" component={Gallery} />
//        <Route path="/homecontents" component={HomeContents}/>
//        <Route path="/allpics" component={AllPics}/>
//       <Route path="/firstImage" component={FirstImage}/>
     
//      </Router>
     
//     </>
//   );
// }

function App() {
  return (
    <div>
     
    <Router>
    <Route path="/" component={SignIn} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/homecontents" component={HomeContents}/>
      <Route path="/allpics" component={AllPics}/>
      <Route path="/familypics" component={FamilyPics}/>
     <Route path="/firstImage" component={FirstImage}/>

    </Router>

     
    </div>
  );
}

export default App;
