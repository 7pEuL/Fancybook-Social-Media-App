import { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PixOutlinedIcon from "@mui/icons-material/PixOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";


import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import images from "../../images";

import "./Navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <Avatar>
            <img src={images.FancyIcon} alt="FancyLogo" />
          </Avatar>
        </Link>

        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search Fancy" />
        </div>
      </div>
      <div className="middle">
        <Avatar>
          <HomeIcon />
        </Avatar>

        <Avatar>
          <OndemandVideoIcon />
        </Avatar>

        <Avatar>
          <StorefrontIcon />
        </Avatar>

        <Avatar>
          <GroupsIcon />
        </Avatar>

        <Avatar>
          <SportsEsportsIcon />
        </Avatar>
      </div>

      <div className="right">
        <Avatar>
          <PixOutlinedIcon />
        </Avatar>

        <Avatar>
          <EmailIcon />
        </Avatar>

        <Avatar>
          <NotificationsIcon />
        </Avatar>

        <Avatar className="flexPhone">
          <nav>
            {darkMode ? (
              <LightModeIcon onClick={toggle} />
            ) : (
              <NightsStayIcon onClick={toggle} />
            )}
          </nav>
        </Avatar>

        <Avatar
          alt="User Photo"
          src={currentUser.profilePic}
          // sx={{ width: "10px"}}
        />
      </div>
    </div>
  );
};

export default Navbar;
