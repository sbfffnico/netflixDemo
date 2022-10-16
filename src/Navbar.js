import React,{useState,useEffect} from 'react';
import './Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);

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

  return (
    <div className={`nav ${show && "nav_background"}`}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" 
        alt="Netflix Logo" 
        className="nav_logo" 
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}/>
      <img src="https://i.imgur.com/WM6zTNc.png" alt="Profile" className="profile_pic" />
    </div>
  )
}

export default Navbar