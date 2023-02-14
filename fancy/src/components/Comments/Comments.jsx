import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import images from "../../images";
import "./Comments.scss";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  // Dame Data
  const comments = [
    {
      id: 1,
      profilePic: images.UserOne,
      name: "White Fantail",
      img: images.UserOne,
      userId: 1,
      desc: "Ethiopian fantail pigeons are fancy birds and they are raised mainly for show, ornamental and exhibition purposes.",
    },
    {
      id: 2,
      profilePic: images.UserTwo,
      name: "Almond Bokhara",
      img: images.UserTwo,
      userId: 2,
      desc: "The Bokhara Trumpeter is a breed of fancy pigeon developed over many years of selective breeding.",
    },
    {
      id: 3,
      profilePic: images.Fantail,
      name: "Jane Doe",
      userId: 3,
      desc: "The Fantail is a popular breed of fancy pigeon. It is characterised by a fan-shaped tail composed of 30 to 40 feathers, abnormally more than most members of the dove and pigeon family, which usually have 12 to 14 tail feathers. The breed is thought to have originated in Pakistan, India, China, Japan or Spain.",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />

        <input type="text" placeholder="Write a Comment" />

        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />

          <div className="info">
            <span>{comment.name}</span>

            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
