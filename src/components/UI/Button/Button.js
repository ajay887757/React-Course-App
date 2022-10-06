
// import './Button.css';
import styles from "./ButtonNew.module.css"
// import styled from 'styled-components';
import React, { useState } from 'react';
import axios from "axios";


// const Button=styled.button`
//   width:100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width:768px){
//     width:auto;
  
//   }

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// `


const Button = props => {

  const [images,setImages]=useState("")
  const IsUploadFile=(props)=>{
    console.log("Images Info",props.target.files );
    setImages(props.target.files)
 
  }
    const UploadFile=(props)=>{
      let fileData=images
      let formData = new FormData()

      formData.append('files',fileData[0])
      formData.append('files',fileData[1])

      axios.post("http://127.0.0.1:8080/uploads",formData).then((res) => {
      console.log("res",res.data)
  }) 
  }
  return (
    <div>
    <button type={props.type} className={styles.button} onClick={props.onClick}>
    {/* <button type={props.type} className="button" onClick={props.onClick}> */}
      {props.children}
    </button>

    <input type="file" multiple onChange={IsUploadFile}></input>
    <button className="btn btn-primary" type="submit" onClick={UploadFile}>Upload</button>

  </div>
    );
};

export default Button;
