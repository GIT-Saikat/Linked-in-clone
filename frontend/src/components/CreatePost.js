import React, { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './CreatePost.css';

const CreatePost = ({ onPostCreated }) => {
  const { user } = useAuth();
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!text.trim()) {
      alert('Please enter some text for your post');
      return;
    }

    setLoading(true);
    
    const formData = new FormData();
    formData.append('text', text);
    if (image) {
      formData.append('image', image);
    }

    try {
      await onPostCreated(formData);
      setText('');
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="create-post">
      <div className="create-post-header">
        <div className="user-avatar">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          className="post-input"
          rows="3"
        />
      </div>

      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Preview" />
          <button onClick={removeImage} className="remove-image">
            ×
          </button>
        </div>
      )}

      <div className="create-post-actions">
        <label className="upload-btn">
          <FaImage />
          <span>Photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </label>

        <button
          onClick={handleSubmit}
          disabled={loading || !text.trim()}
          className="post-btn"
        >
          {loading ? 'Posting...' : 'Post'}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;

