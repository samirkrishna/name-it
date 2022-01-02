import React from "react";
import "./Header.css";

const Header = (props) => {
  // const [state,setState] = useState({title:"name-it"})
  return (
    <div className="header">
      <img
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        className="header-image"
        alt="project-icon"
      />
      <h1 className="header-title">{props.title}</h1>
      {/* <button onClick={()=>setState({props:"samir"})}>On click</button> */}
    </div>
  );
};

export default Header;
