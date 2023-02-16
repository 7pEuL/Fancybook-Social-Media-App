import { Avatar } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import RestoreSharpIcon from "@mui/icons-material/RestoreSharp";
import InsertInvitationRoundedIcon from "@mui/icons-material/InsertInvitationRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import SwitchVideoOutlinedIcon from "@mui/icons-material/SwitchVideoOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

import images from "../../images";
import "./LeftBar.scss";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <Avatar alt="User Photo" src={images.UserPhoto} />
            <span>Fancy</span>
          </div>

          <div className="item">
            <GroupsIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <PeopleAltIcon />
            <span>Groups</span>
          </div>
          <div className="item">
            <StorefrontIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <OndemandVideoIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <RestoreSharpIcon />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <PeopleAltIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <EmailIcon />
            <span>Messages</span>
          </div>
          <div className="item">
            <InsertInvitationRoundedIcon />
            <span>Fancy Events</span>
          </div>
          <div className="item">
            <SportsEsportsIcon />
            <span>Fancy Gaming</span>
          </div>
          <div className="item">
            <CollectionsRoundedIcon />
            <span>Fancy Gallery</span>
          </div>
          <div className="item">
            <VideoCameraFrontOutlinedIcon />
            <span>Fancy Videos</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <FeedOutlinedIcon />
            <span>Fancy News</span>
          </div>
          <div className="item">
            <SwitchVideoOutlinedIcon />
            <span>Live Videos</span>
          </div>
          <div className="item">
            <PaymentOutlinedIcon />
            <span>Orders and Payments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
