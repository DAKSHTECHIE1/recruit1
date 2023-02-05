import React from "react";
import './App.css';
import storage,{db} from "./firebase.js"
import { collection, addDoc } from "firebase/firestore"; 
import { useFormInput } from './hooks';
import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
const App=()=>{
    const username= useFormInput('');
    const language = useFormInput('C');
    const [imgUrl, setImgUrl] = useState(null);
    // const [progresspercent, setProgresspercent] = useState(0);
    function handleSubmit(e) {
      e.preventDefault();
      // firestore.collection('data').add({
      //   username:username.value,
      //   language: language.value,
      // });
       addDoc(collection(db, "users"), {
        username:username.value,
        language:language.value,
      });
      console.log(e.target[2].files);
      const file = e.target[2]?.files[0]

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // uploadTask.on("state_changed",
    //   (snapshot) => {
    //     const progress =
    //       Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //     setProgresspercent(progress);
    //   },
    //   (error) => {
    //     alert(error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       setImgUrl(downloadURL)
    //     });
    //   }
    // );
      var c= document.getElementById('file');
      console.log('hello')
      console.log('iiiii')
      console.log('img',imgUrl);
      document.getElementById('username').value='';
      document.getElementById('language').value='C';
      document.getElementById('preview-selected-image').src='';
      language.setValue('C');
      username.setValue('');
    };
    function previewImage(event){
      const imageFiles = event.target.files;
      const imageFilesLength = imageFiles.length;
      if (imageFilesLength > 0) {
          const imageSrc = URL.createObjectURL(imageFiles[0]);
          const imagePreviewElement = document.querySelector("#preview-selected-image");
          setImgUrl(imageSrc);
          imagePreviewElement.style.display = "block";
      }
    }  
    return(
    <div className="hello">
    <h1>Code Streaks!</h1><br/>
    <h4>Problem (29/01/2023)</h4>
    <br/>
    <h4>Leetcode</h4> <img src='https://raw.githubusercontent.com/PriyanshuSharma23/starter-code-recruitment-2023/4b7e0af6e80a389b2a01b4daae1f04d443576373/assets/unlink.svg' height="15px"  alt=''/>
    <br/><br/><br/>
    <form id="registrationform" onSubmit={handleSubmit}>
      <label htmlFor="username"><h4>Leetcode Username</h4></label><br/>
      <input type="text" id='username' className="round-input" {...username}/><br/><br/>
      <label htmlFor="language"><h4>Language:</h4></label><br/>
      <select  id="language"className="round-input" {...language}>
        <option value="C" >C</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
      </select><br/><br/>
      <h4>Screenshot</h4>
      <div id="screenshot">Make sure that the username and the code are visible in the screenshot</div> 
      <br/>
      <label htmlFor="file">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///8AAADa2trz8/PMzMz7+/vPz8+VlZVsbGxJSUkkJCRxcXEGBgbd3d3u7u45OTm4uLjl5eVfX195eXkaGhpCQkKvr69WVlY7OztUVFS3J5L2AAADPklEQVR4nO2d2XaqQBREaRGZBMQBzf//6L1mWEYZuldAT51j7eck1l6GHmwsouhlJJs0ywtX5Fm6SV73si9jXW7djW25lg60MKu9e2S/kg61JIee35WDdKzFqPNBQedOtXS0ZaiOI4LOHSvpcEsQj/pdiaXjzSdpJg0b/fNGOSnoXCkdcC5rj6Bz2ifGk9fwJB1xHjuvoHM76ZCzmB5mvmikQ86hDhB0TvO83wUZdtIxZ3AOMjxLx5xByGWo+kKMiyDDQu/SrQ0SdK6VDvpnqkBDvTuMVaCh3t0+DWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piI99Q9Dv48dttVqGKqR/58pusVdsfQUUdXe+hHVZoFJczt14380urIoEn2a4mGntL63Sw6nfIJb4etW08dgDF1v5B71xuRt0Qod1XfyahOrxdkrNHG+D6li/qHbyH8HhhlgLfLfchq4eNfK14u2XGNth/znTS6d4KteZ39pUf8//iT/Z+n9MMdsk2khneDKbKJWO8GTSKJOO8GQys+uZH/JI95beTxFJJ3g6b/Ae2r8O7Y+l9udD+2sa++tS+3uLN9gf2t/jv8HnNPY/awt5kIhObo8/sf+Zt/1zC5NnT83Dgbe988P+o7KsnwFfsX6O/zmodh+N7k1/0Uzdi/E96Ji+n2ZhQO+JWhD797XRkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+Ng3tP99/DbQsJUO+mfisI6N4sVVD0sSVpZykY45g48gw7N0zBl0QYaddMwZ1EGGvj4ZaEIuxEY65CxCOnjGK49U4K/XOvn/CDT+7tDhVi5F+HrgHp/LpI9kerBp+sVx6ognDRUv2G5U482aR727ijvqsQE1Vz3X3zHccnvw/6IeVv065r3enf0w6/J3Nfq2VD8NDpBs0iwvXJFn6eaFc8Q/b8ZMsSF2Ac4AAAAASUVORK5CYII=" width="15px" id="plus" alt=''/>
        <input type="file" id="file"  name="image" onChange={previewImage}/>
      </label>
      <span id="add"> Add Screenshot</span>
      <div id="imgbox">
        <img id="preview-selected-image" src={imgUrl}  alt=''/>
      </div><br/>
      <input type="submit" value="submit" id="submit" className="round-input" />
    </form>
    {/* {
        !imgUrl &&
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      } */}
      <img src='https://raw.githubusercontent.com/PriyanshuSharma23/starter-code-recruitment-2023/4b7e0af6e80a389b2a01b4daae1f04d443576373/assets/algo-logo.svg'  alt='' id='logo'/>
    </div>
  )
}

export default App;