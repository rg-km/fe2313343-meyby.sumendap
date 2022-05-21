// TODO: answer here
import axios from 'axios';
import { API_URL } from '../api/config';
import React, { useState } from 'react';

export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount}) {

    // TODO: answer here
    const [like, setLike] = useState(likeCount);
    const [dislike, setDislike] = useState(dislikeCount);

    const [isLikedBtn, setIsLikedBtn] = useState(isLiked);
    const [isDislikedBtn, setIsDislikedBtn] = useState(isDisliked);

    const apiUrl = `${API_URL}/post/${id}`;

    const handleLike = async () => {
        if (!isLikedBtn) {
            setLike(like + 1);
            setIsLikedBtn(true);
            await axios.get(`${apiUrl}/like`, {
                withCredentials: true,
            });
        } else if (isDislikedBtn) {
            setIsLikedBtn(true)
            setIsDislikedBtn(false)

            setLike(like + 1);
            setDislike(dislike - 1);
            await axios.get(`${apiUrl}/like`, {
                withCredentials: true,
            });
            await axios.get(`${apiUrl}/undislike`, {
                withCredentials: true,
            });
        } else {
            setLike(like - 1);
            setIsLikedBtn(false);
            await axios.get(`${apiUrl}/unlike`, {
                withCredentials: true,
            })
        }
    }

    const handleDislike = async () => {
        if (!isDislikedBtn) {
            setIsDislikedBtn(true)
            setDislike(dislike + 1);
            await axios.get(`${apiUrl}/dislike`, {
                withCredentials: true,
            });
        } else if (isLikedBtn) {
            setIsDislikedBtn(true)
            setIsLikedBtn(false)

            setDislike(dislike + 1);
            setLike(like - 1);
            await axios.get(`${apiUrl}/dislike`, {
                withCredentials: true,
            });
            await axios.get(`${apiUrl}/unlike`, {
                withCredentials: true,
            });
        } else {
            setIsDislikedBtn(false)
            setDislike(dislike - 1);
            await axios.get(`${apiUrl}/undislike`, {
                withCredentials: true,
            });
        }
    }

    
    return (    
        <div className="like-dislike-btn">
            <div className="like-btn">
                <button aria-label="Like Button" onClick={() => {
                    handleLike();
                }}>Like</button>
                <span aria-label="Like Count">{like}</span>
            </div>
            <div className="dislike-btn">
                <button aria-label="Dislike Button" onClick={() => {
                    handleDislike();
                }}>Dislike</button>
                <span aria-label="Dislike Count">{dislike}</span>
            </div>
        </div>
    )
    
}