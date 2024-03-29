import React from "react";
import Logo from "../../Asserts/logo.png";
import profile from "../../Asserts/img1.png";
import {
  UilSignOutAlt,
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
} from "@iconscout/react-unicons";
import "./Cosidebar.css";
function Cosidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          V<span>sms</span>
        </span>
      </div>
      <div className="profile-img">
        <img src={profile} alt="" />
        <p>welcome Satya..</p>
      </div>
      <div className="menu">
        <div className="menuItem">
          <UilEstate />
          <span>Add Student</span>
        </div>
        <div className="menuItem">
          <UilClipboardAlt />
          <span>Add Attendence</span>
        </div>
        <div className="menuItem">
          <UilUsersAlt />
          <span>Add Test Result</span>
        </div>
        <div className="menuItem">
          <UilPackage />
          <span>Add Mock Results</span>
        </div>
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
}

export default Cosidebar;
