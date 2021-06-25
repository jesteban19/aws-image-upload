import './App.css';
import axios from 'axios';
import React,{useState, useEffect, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

const UserProfiles = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  const fetchUserProfiles = () => {
    axios.get("http://localhost:8080/api/v1/user-profile").then( res => {
      console.log(res)
      setUserProfiles(res.data)

    });
  }

  useEffect(() => {
    fetchUserProfiles();
  }, [])

  return userProfiles.map((userProfile, index) => {
    return (
      <div key={index}>
        {userProfile.userProfileImagenLink ? (
          <img src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`} />
          ) : null }
        <br/>
        <br/>
        <h1>{userProfile.username}</h1>
        <p>{userProfile.userProfileId}</p>
        <MyDropzone userProfileId={userProfile.userProfileId} />
        <br/>
      </div>
    )
  })
}

function MyDropzone({userProfileId}) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    axios.post(`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,formData,{
      headers:{
        "Content-type":"multipart/form-data"
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <UserProfiles/>
    </div>
  );
}

export default App;
