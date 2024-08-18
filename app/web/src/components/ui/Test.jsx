import { useState } from "react";
import axios from 'axios';

export default function Test() {
  const [file, setFile] = useState(null);
  const [imageId, setImageId] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setImageId(response.data.id);
    } catch (error) {
      console.error('Failed to upload image', error);
    }
  };
  return (
    <div className="p-6">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" className="bg-blue-500 px-6 py-4">Upload Image</button>
      </form>
      {imageId && <img src={`http://localhost:3000/images/${imageId}`} alt="Uploaded" />}
    </div>
  );
}