import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  let deletePost = () => {
    props.deletePost(props.id)
  }
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/600x315/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg" alt="ava"></img>
      {props.message}
      <div>
        <span>
          {(props.like > 1) ? props.like + ' likes' : props.like + ' like'}
        </span>
      </div>
      <span className={s.deleteButton} onClick={deletePost}>Delete</span>
    </div>
  );
};
export default Post;
