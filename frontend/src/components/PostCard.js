import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaComment, FaEdit, FaTrash, FaRegThumbsUp } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './PostCard.css';

const PostCard = ({ post, onLike, onComment, onEdit, onDelete }) => {
  const { user } = useAuth();
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(post.text);

  const isLiked = post.likes?.includes(user?.id);
  const isOwner = post.user?._id === user?.id;

  const handleLike = () => {
    onLike(post._id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(post._id, commentText);
      setCommentText('');
      setShowCommentInput(false);
    }
  };

  const handleEdit = () => {
    if (editText.trim() && editText !== post.text) {
      onEdit(post._id, editText);
      setIsEditing(false);
    } else {
      setIsEditing(false);
    }
  };

  const formatDate = (date) => {
    const now = new Date();
    const postDate = new Date(date);
    const diffInSeconds = Math.floor((now - postDate) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    
    return postDate.toLocaleDateString();
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-author">
          <div className="author-avatar">
            {post.user?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="author-info">
            <Link to={`/profile/${post.user?._id}`} className="author-name">
              {post.user?.name}
            </Link>
            <span className="post-time">{formatDate(post.createdAt)}</span>
          </div>
        </div>
        {isOwner && (
          <div className="post-actions">
            <button onClick={() => setIsEditing(!isEditing)} className="action-btn">
              <FaEdit />
            </button>
            <button onClick={() => onDelete(post._id)} className="action-btn delete">
              <FaTrash />
            </button>
          </div>
        )}
      </div>

      <div className="post-content">
        {isEditing ? (
          <div className="edit-form">
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-textarea"
            />
            <div className="edit-actions">
              <button onClick={handleEdit} className="btn-small btn-primary">
                Save
              </button>
              <button onClick={() => setIsEditing(false)} className="btn-small btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p className="post-text">{post.text}</p>
        )}
        
        {post.image && (
          <img src={post.image} alt="Post" className="post-image" />
        )}
      </div>

      <div className="post-stats">
        <span>{post.likes?.length || 0} likes</span>
        <span>{post.comments?.length || 0} comments</span>
      </div>

      <div className="post-interactions">
        <button onClick={handleLike} className={`interaction-btn ${isLiked ? 'liked' : ''}`}>
          {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
          <span>Like</span>
        </button>
        <button onClick={() => setShowCommentInput(!showCommentInput)} className="interaction-btn">
          <FaComment />
          <span>Comment</span>
        </button>
      </div>

      {showCommentInput && (
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            className="comment-input"
          />
          <button type="submit" className="btn-small btn-primary">
            Post
          </button>
        </form>
      )}

      {post.comments && post.comments.length > 0 && (
        <div className="comments-section">
          {post.comments.map((comment) => (
            <div key={comment._id} className="comment">
              <div className="comment-avatar">
                {comment.user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="comment-content">
                <div className="comment-header">
                  <Link to={`/profile/${comment.user?._id}`} className="comment-author">
                    {comment.user?.name}
                  </Link>
                  <span className="comment-time">{formatDate(comment.createdAt)}</span>
                </div>
                <p className="comment-text">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;

