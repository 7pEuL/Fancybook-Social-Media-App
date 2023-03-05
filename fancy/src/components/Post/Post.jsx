import { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

import Comments from "../Comments/Comments";
import "./Post.scss";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const liked = true;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <Link to={`/profile/${post.userId}`}>
              <img src={post.profilePic} alt="" />
            </Link>
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>

              <span className="date">3 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>

          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item heart">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <ChatBubbleOutlineRoundedIcon />
            12 Comments
          </div>
          <div className="item">
            <ReplyAllIcon sx={{ rotate: "-10deg" }} />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
