import axios from 'axios';
import React, { useState } from 'react'

const 
AddMedia = () => {
    const [mediaName, setMediaName] = useState('');
      const [mediaImage, setMediaImage] = useState(null);



  const handleNameChange = (e) => {
    setMediaName(e.target.value);
  };

  const handleImageChange = (e) => {
    setMediaImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here you can handle the form submission and image upload logic.
    // You might want to use libraries like Axios to send the form data to your server.

    console.log('Media Name:', mediaName);
    console.log('Media Image:', mediaImage);
  

  try {
    const formData = new FormData();
    formData.append('key', '15abb5d6d10c5792735d187ebb3d95b0'); // Replace with your ImgBB API key
    formData.append('image', mediaImage);

    const response = await axios.post('https://api.imgbb.com/1/upload', formData);
    const imageUrl = response.data.data.url;

    console.log('Image uploaded successfully. URL:', imageUrl);
    // You can add additional logic here, such as saving the media name and image URL to a database.
  } catch (error) {
    console.error('Error uploading image:', error.message);
  }
};
  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Add Media Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="mediaName" className="block text-sm font-medium text-gray-700">
            Media Name
          </label>
          <input
            type="text"
            id="mediaName"
            name="mediaName"
            className="mt-1 p-2 w-full border rounded"
            value={mediaName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mediaImage" className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            id="mediaImage"
            name="mediaImage"
            accept="image/*"
            className="mt-1"
            onChange={handleImageChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  )
}


export default AddMedia;