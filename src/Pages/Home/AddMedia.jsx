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

    // console.log('Media Name:', mediaName);
    // console.log('Media Image:', mediaImage);
  
    
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
        
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
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