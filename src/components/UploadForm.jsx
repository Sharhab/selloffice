
// UploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);
  const [authToken, setAuthToken] = useState(''); // Ideally, this should come from your authentication flow.
  const [isFormVisible, setFormVisible] = useState(false); // State to toggle form visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !picture) {
      alert('All fields are required!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('picture', picture);

    try {
      const response = await axios.post(
        '/api/upload', 
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log('Upload response:', response.data);
      setFormVisible(false); // Hide form after successful submission
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      {/* Centered Add button at the bottom */}
      <button
        style={{
          position: 'fixed',
          bottom: '20px', // Positioning the button at the bottom
          left: '50%',
          transform: 'translateX(-50%)', // Ensures it's centered horizontally
          backgroundColor: '#008CBA',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          padding: '10px',
          fontSize: '30px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 100, // Ensure it's above other elements
        }}
        onClick={() => setFormVisible(true)}
      >
        +
      </button>

      {/* Conditional rendering of the form */}
      {isFormVisible && (
        <div style={formStyles}>
          <h2 style={headerStyles}>Upload Item</h2>
          <form onSubmit={handleSubmit}>
            <div style={inputContainerStyles}>
              <label style={labelStyles}>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={inputStyles}
                placeholder="Enter title"
              />
            </div>

            <div style={inputContainerStyles}>
              <label style={labelStyles}>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={textareaStyles}
                placeholder="Enter description"
              />
            </div>

            <div style={inputContainerStyles}>
              <label style={labelStyles}>Picture:</label>
              <input
                type="file"
                onChange={(e) => setPicture(e.target.files[0])}
                style={inputStyles}
              />
            </div>

            <div style={buttonContainerStyles}>
              <button type="submit" style={submitButtonStyles}>
                Submit
              </button>
              <button
                type="button"
                style={closeButtonStyles}
                onClick={() => setFormVisible(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// Updated Styles
const formStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  zIndex: 10,
  width: '90%',
  maxWidth: '450px', // Reduced max width
  height: '70vh', // Adjusted to 70% height
  overflowY: 'auto', // Allow scrolling if the content exceeds the height
};

const headerStyles = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  textAlign: 'center',
};

const inputContainerStyles = {
  marginBottom: '20px',
};

const labelStyles = {
  fontSize: '16px',
  fontWeight: '500',
  marginBottom: '8px',
  display: 'block',
};

const inputStyles = {
  width: '100%',
  maxWidth: '400px', // Limit the width of inputs
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxSizing: 'border-box', // Ensure padding doesn't affect width
};

const textareaStyles = {
  width: '100%',
  maxWidth: '400px', // Limit the width of textarea
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxSizing: 'border-box',
  resize: 'vertical', // Allows the user to resize vertically
  minHeight: '100px',
};

const buttonContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
};

const submitButtonStyles = {
  backgroundColor: '#008CBA',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  width: '45%', // Ensure buttons do not overflow
};

const closeButtonStyles = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  width: '45%', // Ensure buttons do not overflow
};

export default UploadForm;
