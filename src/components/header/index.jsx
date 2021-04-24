import { Box, IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import React, {useEffect ,useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../../feature/components/authentificaion/components/login";
import Register from "../../feature/components/authentificaion/components/register";
import MenuIcon from "@material-ui/icons/Menu";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { logout } from "../../feature/components/authentificaion/userSlice";
import Forget from "../../feature/components/authentificaion/components/forgetPass";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Logo from "./components/logo";
import SearchNav from "./components/search";
import ListBar from "./components/listBar";
import UserBar from "./components/user";
import HeaderAbout from "../../feature/components/About/components/header";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
  font: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "2rem",
    textDecoration: "none",
    color: "#0d0800",
  },
  font_text: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "1.6rem",
  },
  dialog: {
    width: "40%",
  },
}));

function Header(props) {
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser._id || "";

  var fullName= String(loggedInUser.userName).trim();
  var lastName = fullName.split(' ').slice(-1).join(' ');
  return (
    <div>
      {!isLoggedIn && <HeaderAbout />}
      {isLoggedIn && (
        <header className="header">
          <nav className="header__navbar">
            <div class="header__navbar_left">
              <Logo />
              <SearchNav />
            </div>
            <div class="header__navbar_center">
              <ListBar />
            </div>
            <div class="header__navbar_right">
              <UserBar />
            </div>
          </nav>
          <div className="menu_mobile">

            <Logo />
            <label for="nav-mobile-input" className="menu-icon">
              <MenuIcon className="menu-drop" />
            </label>
            <label for="nav-mobile-input">
              <div className="overlay">
              </div>
            </label>
              <input type="checkbox" hidden className="nav__input" name="" id="nav-mobile-input"/>
              <input type="checkbox" hidden className="close" name="" id="nav-mobile-input"/>

            <div className="nav__moblie">
            <ul className="nav__moblie-list">
              <label for="close" class="nav__moblie-close" >
                  <Close className="nav__moblie-Btnclose"/>
              </label>
            <li><a href="" className="nav__mobile-link">{lastName}</a></li>
              <li><a href="" className="nav__mobile-link">Trang chủ</a></li>
              <li><a href="" className="nav__mobile-link">Khóa học</a></li>
              <li><a href="" className="nav__mobile-link">Nhóm</a></li>
              <li><a href="" className="nav__mobile-link">sự kiện</a></li>
              <li><a href="" className="nav__mobile-link">Đăng xuất</a></li>
            </ul>
            </div>
          </div>
        </header>
      )}
    </div>
  );
}

export default Header;
