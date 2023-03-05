import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Avatar } from "@mui/material";

import images from "../../images";
import "./Stories.scss";

const stories = [
  {
    id: 1,
    profile: images.UserOne,
    name: "White Fantail",
    img: images.Story1,
  },
  {
    id: 2,
    profile: images.UserTwo,
    name: "Almond Bokhara",
    img: images.Story2,
  },
  {
    id: 3,
    profile: images.Diamond,
    name: "White Diamond",
    img: images.MyQueen,
  },
  {
    id: 4,
    profile: images.UserFour,
    name: "White Pouter",
    img: images.UserFour,
  },
];

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
        {/* <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab> */}
        {/* <IconButton aria-label="" size="small">
          <AddIcon fontSize="small" />
        </IconButton> */}
      </div>

      {stories.map((story) => (
        <div className="story" key={story.id}>
          <Avatar alt="User Photo" src={story.profile} />
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
