import { Avatar } from "@mui/material";
import images from "../../images";
import "./RightNav.scss";

const RightNav = () => {
  return (
    <div className="rightNav">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <Avatar
                alt="User Photo"
                src={images.Diamond}
                // sx={{ width: "10px"}}
              />
              <span>White Diamond</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Block</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <Avatar
                alt="User Photo"
                src={images.Fantail}
                // sx={{ width: "10px"}}
              />
              <span>Diamond Fantail</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Block</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <Avatar
                alt="User Photo"
                src={images.UserOne}
                // sx={{ width: "10px"}}
              />
              <p>
                <span>White Fantail</span> Changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <Avatar
                alt="User Photo"
                src={images.UserThree}
                // sx={{ width: "10px"}}
              />
              <p>
                <span>Red Fantail</span> Update their stats
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <Avatar
                alt="User Photo"
                src={images.UserTwo}
                // sx={{ width: "10px"}}
              />
              <p>
                <span>Almond Bokhara</span> Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <Avatar
                alt="User Photo"
                src={images.UserOne}
                // sx={{ width: "10px"}}
              />
              <div className="online" />
              <span>White Fantail</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <Avatar
                alt="User Photo"
                src={images.Diamond}
                // sx={{ width: "10px"}}
              />
              <div className="online" />
              <span>White Diamond</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <Avatar
                alt="User Photo"
                src={images.UserThree}
                // sx={{ width: "10px"}}
              />
              <div className="online" />
              <span>Red Fantail</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <Avatar
                alt="User Photo"
                src={images.UserTwo}
                // sx={{ width: "10px"}}
              />
              <div className="online" />
              <span>Ethiopian Bokhara</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <Avatar
                alt="User Photo"
                src={images.UserFour}
                // sx={{ width: "10px"}}
              />
              <div className="online" />
              <span>White Pouter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
