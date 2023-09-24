import "./navbar.scss";
import {
  MdSearch,
  MdLanguage,
  MdDarkMode,
  MdOutlineFullscreenExit,
  MdChatBubbleOutline,
  MdNotificationsNone,
  MdFormatListBulleted,
} from "react-icons/md";

import avater from '../../assets/person-avater.webp'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <MdSearch  size={20}/>
        </div>

        <div className="items">
          <div className="item">
            <MdLanguage className="icon"/>
            English
          </div>
          <div className="item">
            <MdDarkMode className="icon"/>
          </div>
          <div className="item">
            <MdOutlineFullscreenExit className="icon"/>
          </div>
          <div className="item">
            <MdNotificationsNone className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdChatBubbleOutline className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <MdFormatListBulleted className="icon"/>
          </div>
          <div className="item">
            <img src={avater} alt="" className="avater" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
