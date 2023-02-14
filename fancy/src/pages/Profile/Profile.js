import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// import Posts from "../../components/posts/Posts";
import "./Profile.scss";
import images from "../../images";

const Profile = () => {
  return (
    <div className="profile">
      <div className="bgImage">
        <img
          src={images.Story3}
          alt=""
          className="cover"
        />
        <div className="container"></div>
      </div>
    </div>
  );
};

export default Profile;
