import Avatar from "@material-ui/core/Avatar";
import React from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from "react-router-dom";


UserBar.propTypes = {
    
};

function UserBar(props) {
    return (
        <ul className="header__list-user">
              <li >
                <a className="header__user" href="/profile">
                <Avatar
                  alt="Hiếu"
                  src="/static/images/avatar/1.jpg"
                />
                <p className="name">Hiếu</p>
                </a>
                
              </li>
              <li className="header__item-user">
                <div className="item-user">
                  <a href="/tin-nhan"><MailOutlineIcon className="icon-user" /></a>
                  
                </div>
              </li>
              <li className="header__item-user">
                <div className="item-user">
                  <NotificationsActiveIcon className="icon-user"/>
                  
                </div>
                </li>
                <li className="header__item-user">
                <div className="item-user-drop">
                  <ArrowDropDownIcon className="icon-user-drop"/>
                  
                </div>
              </li>
              
            </ul>
    );
}

export default UserBar;