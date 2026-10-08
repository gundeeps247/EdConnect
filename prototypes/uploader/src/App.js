import './App.css';
import { useState, useEffect } from "react";
import { storage } from './firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';

function App() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileList, setFileList] = useState([]);

  const fileListRef = ref(storage, "files/");

  const uploadFile = () => {
    if (fileUpload === null) return;
    const fileName = `${v4()}_${fileUpload.name}`; // Append UUID to filename
    const fileRef = ref(storage, `files/${fileName}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      }).catch(error => {
        console.error("Error getting download URL:", error);
      });
    }).catch(error => {
      console.error("Error uploading file:", error);
    });
  };

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await listAll(fileListRef);
        const urls = await Promise.all(response.items.map(async (item) => {
          return getDownloadURL(item);
        }));
        setFileList(urls);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();

    return () => {
      // Cleanup function
    };
  }, [fileListRef]);

  return (
    <div className="App">
      <input type='file' onChange={(event) => setFileUpload(event.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
      {fileList.map((url, index) => (
        <img key={index} src={url} alt={`File ${index}`} />
      ))}
    </div>
  );
}

export default App;
