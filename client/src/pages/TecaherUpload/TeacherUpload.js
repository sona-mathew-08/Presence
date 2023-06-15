// import React, { useState } from 'react';
// import './TeacherUpload.css'

// const TeacherUpload = () => {
//     const[selectedImage,setSelectedImage]=useState('')
//     const handleImageChange=(e)=>{
//         if(e.target.files && e.target.files.length>0){
//             setSelectedImage(e.target.files[0])
//         }
//     }
//   return (
//     <div className='teacher-upload'>
//       <h1>Upload 3 Image </h1>
//       <div className="wrapper">
//         <div className="box">
//           <div className="js--image-preview"></div>
//           <div className="upload-options">
//             <label>
//               <input type="file" className="image-upload" accept="image/*" />
//             </label>
//           </div>
//         </div>

//         <div className="box">
//           <div className="js--image-preview"></div>
//           <div className="upload-options">
//             <label>
//               <input type="file" className="image-upload" accept="image/*" />
//             </label>
//           </div>
//         </div>

//         <div className="box">
//           <div className="js--image-preview"></div>
//           <div className="upload-options">
//             <label>
//               <input type="file" className="image-upload" accept="image/*" />
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TeacherUpload;


import React, { useState } from 'react';
import './TeacherUpload.css'

const TeacherUpload = () => {
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
    <div className='teacher-upload'>
      <h1>Upload classroom image</h1>
      <div className="wrapper">
        {renderImagePreviews()}
        {previewImages.length < 1 && (
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

export default TeacherUpload;
