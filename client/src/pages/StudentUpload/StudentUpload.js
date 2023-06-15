
import React, { useState } from 'react';
import './StudentUpload.css'

const StudentUpload = () => {
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imagePreview = [...previewImages];
        imagePreview[index] = reader.result;
        setPreviewImages(imagePreview);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderImagePreviews = () => {
    return previewImages.map((image, index) => (
      <div className="box" key={index}>
        <div
          className="js--image-preview"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="upload-options">
          <label>
            <input
              type="file"
              className="image-upload"
              accept="image/*"
              onChange={(e) => handleFileChange(e, index)}
            />
          </label>
        </div>
      </div>
    ));
  };

  return (
    <div className='student-upload'>
      <h1>Upload your 3 images</h1>
      <div className="wrapper">
        {renderImagePreviews()}
        {previewImages.length < 3 && (
          <div className="box">
            <div className="js--image-preview"></div>
            <div className="upload-options">
              <label>
                <input
                  type="file"
                  className="image-upload"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, previewImages.length)}
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentUpload;
