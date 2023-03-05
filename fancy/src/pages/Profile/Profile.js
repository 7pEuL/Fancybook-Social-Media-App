import PersonIcon from "@mui/icons-material/Person";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";

// import Posts from "../../components/posts/Posts";
import "./Profile.scss";
import images from "../../images";
import { Button } from "@mui/material";
import Posts from "../../components/Posts/Posts";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="bgImage">
          <img src={images.Story3} alt="" className="cover" />

          <img src={images.Diamond} alt="" className="profilePic" />
          <div className="userInfo">
            <div className="profileContainer">
              <div className="empty" />

              <div className="profileName">
                <span>White Diamond</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon /> USA
                    {/* <span>{data.city}</span> */}
                  </div>
                  <div className="item">
                    <LanguageIcon /> fancybook.com
                    {/* <span>{data.website}</span> */}
                  </div>
                </div>
              </div>

              <div className="button">
                <Button variant="contained" startIcon={<PersonIcon />}>
                  Friends
                </Button>
                <Button variant="contained" startIcon={<MapsUgcIcon />}>
                  Message
                </Button>
              </div>
            </div>
            {/* <Posts /> */}
            <div className="profileNav">
              <div className="left">
                <span>Posts</span>
                <span>About</span>
                <span>Friends</span>
                <span>Photos</span>
                <span>Videos</span>
                <span>Check-ins</span>
                <span>
                  More <KeyboardArrowDownIcon />
                </span>
              </div>
              <div className="right">
                <MoreHorizIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="posts">
          <Posts />
        </div>
      </div>
    </>
  );
};

export default Profile;
