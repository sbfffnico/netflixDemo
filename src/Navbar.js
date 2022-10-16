import React,{useState,useEffect} from 'react';
import './Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);
  const [helpBox, setHelpBox] = useState("hidden");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        handleShow(true);
      } 
      else {
        handleShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, [show]);

  const showHelpBox = () => {
    if(helpBox === "hidden") {
      setHelpBox("visible");
    }
    else {
      setHelpBox("hidden");
    }
  }

  return (
    <div className={`nav ${show && "nav_background"}`}>
      <div className="nav_left">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" 
          alt="Netflix Logo" 
          className="nav_logo" 
          onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}/>
      </div>
      <div className="nav_right">
        <div 
          className="nav_help" 
          onMouseEnter={() => {showHelpBox()}}
          onMouseLeave={() => {showHelpBox()}}
        >
          HELP
        </div>
        <img src="https://i.imgur.com/WM6zTNc.png" alt="Profile" className="profile_pic" />
      </div>
      <div className="nav_helpbox" style={{visibility:helpBox}}>
        <br /><strong>Known Issues:</strong><br />
        - Navigating through row of movies requires left/right on keypad or change cursor to scroll mode <br />
        - Movies within different rows/topics can play simultaneously.  To fix temporarily, ensure nothing in a prior topic is playing before moving to a new row.<br /><br />
        <strong>Other</strong> <br />
        - Unfound trailers will play Rick Astley's Never Gonna Give You Up by default.
      </div>
    </div>
  )
}

export default Navbar;