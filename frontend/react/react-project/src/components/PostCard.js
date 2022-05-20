// TODO: answer here
import React, { useState } from "react"
import LikeDislikeButon from "../components/LikeDislikeButton"

export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here

  const [like] = useState(0);
  const [dislike] = useState(0);
  const [isLikedBtn] = useState(false);

  return (
    <div className="post-card-component" aria-label="Post Card">
      <div className="post-card-wrapper">
        <section className="card-image">
          <div>
            <img src={image} alt="Post" aria-label="Post Image"/>
          </div>
        </section>
        <section className="card-button">
          <LikeDislikeButon likeCount={like} dislikeCount={dislike} isLiked={isLikedBtn}/>
        </section>
        <section className="card-detail">
          <div>
            <h2 className="card-name" aria-label="Post User Name">{username}</h2>
          </div>
          <div>
            <p className="card-caption" aria-label="Post Caption">{caption}</p>
          </div>
        </section>
        <section className="card-date">
          <h3 aria-label="Post Date">{date}</h3>
        </section>
      </div>  
    </div>
  )
}


