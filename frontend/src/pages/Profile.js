import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProfile = useCallback(async () => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      setProfile(response.data.user);
      setPosts(response.data.posts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError('Failed to load profile');
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleLike = async (postId) => {
    try {
      const response = await axios.post(`/api/posts/${postId}/like`);
      setPosts(posts.map(post => post._id === postId ? response.data : post));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleComment = async (postId, text) => {
    try {
      const response = await axios.post(`/api/posts/${postId}/comment`, { text });
      setPosts(posts.map(post => post._id === postId ? response.data : post));
    } catch (error) {
      console.error('Error commenting on post:', error);
    }
  };

  const handleEdit = async (postId, text) => {
    try {
      const response = await axios.put(`/api/posts/${postId}`, { text });
      setPosts(posts.map(post => post._id === postId ? response.data : post));
    } catch (error) {
      console.error('Error editing post:', error);
      alert('Failed to edit post');
    }
  };

  const handleDelete = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`/api/posts/${postId}`);
        setPosts(posts.filter(post => post._id !== postId));
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post');
      }
    }
  };

  if (loading) {
    return (
      <div className="profile-container">
        <div className="container">
          <div className="loading">Loading profile...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <div className="container">
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  const isOwnProfile = currentUser?.id === userId;

  return (
    <div className="profile-container">
      <div className="container">
        <div className="profile-header">
          <div className="profile-banner"></div>
          <div className="profile-info">
            <div className="profile-avatar-large">
              {profile?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="profile-details">
              <h1>{profile?.name}</h1>
              <p className="profile-email">{profile?.email}</p>
              {profile?.bio && <p className="profile-bio">{profile.bio}</p>}
              <p className="profile-joined">
                Joined {new Date(profile?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="profile-content">
          <h2>{isOwnProfile ? 'Your Posts' : `${profile?.name}'s Posts`}</h2>
          
          {posts.length === 0 ? (
            <div className="no-posts">
              <p>{isOwnProfile ? "You haven't posted anything yet." : "No posts yet."}</p>
            </div>
          ) : (
            <div className="posts-list">
              {posts.map(post => (
                <PostCard
                  key={post._id}
                  post={post}
                  onLike={handleLike}
                  onComment={handleComment}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

