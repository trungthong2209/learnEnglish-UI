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
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../../feature/components/authentificaion/components/login";
import Register from "../../feature/components/authentificaion/components/register";
import logo from "./logo/logoCap2.gif";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { logout } from "../../feature/components/authentificaion/userSlice";
import Forget from "../../feature/components/authentificaion/components/forgetPass";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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
    textDecoration:"none",
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
const MODE = {
  LOGIN: "login",
  REGISTER: "register",
  FORGET: "forget",
};

function Header(props) {
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser._id;

  const [mode, setMode] = useState(MODE.LOGIN);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleCloseMenu = (e) => {
    setAnchorEl(null);
  };
  const handleMenuUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    handleCloseMenu();
    const action = logout();
    dispatch(action);
  };

  return (
    <div>
      <header className="header">
        <div className="grid">
          <nav className="header__navbar">
            <ul>
              <li className="header__item ">
                <Link to="/home">
                  <img className="header__logo" src={logo} alt="Logo" />
                </Link>
              </li>
              <li className="header__item "></li>
            </ul>
            <ul className="header__list">
              <li className="header__item">
                <Link to="/home" className="header__item-link">
                  <HomeIcon fontSize="large" className="header__navbar-icon" color="white" />
                  Trang chủ
                </Link>
              </li>
              <li className="header__item">
                <NavLink to="/khoa-hoc" className="header__item-link">
                  <LocalLibraryIcon
                    className="header__navbar-icon" fontSize="large"
                    color="white"
                  />
                  Khóa học
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/nhom" className="header__item-link">
                  <GroupIcon className="header__navbar-icon" fontSize="large" color="white" />
                  Nhóm
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/tin-nhan" className="header__item-link">
                  <MailOutlineIcon className="header__navbar-icon" fontSize="large" color="white" />
                  Tin nhắn
                </NavLink>
              </li>

              <li className="header__item ">
                {!isLoggedIn && (
                  <p
                    className="header__item-link header__item-strong"
                    variant="outlined"
                    color="primary"
                    onClick={handleClickOpen}
                  >
                    Đăng nhập
                  </p>
                )}
                {isLoggedIn && (
                  <Avatar
                    alt= {loggedInUser.userName}
                    src="/static/images/avatar/1.jpg"
                    className={classes.large}
                    onClick={handleMenuUserClick}
                  />
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        getContentAnchorEl={null}
      >
        <MenuItem  onClick={handleCloseMenu}>
          <Link className={classes.font} to="/profile">Trang cá nhân</Link>
        </MenuItem>
        <MenuItem className={classes.font} onClick={handleCloseMenu}>
          Cài đặt
        </MenuItem>
        <MenuItem className={classes.font} onClick={handleLogoutClick}>
          Đăng xuất
        </MenuItem>
      </Menu>

      <div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
          <DialogContent>
            {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose} />

                <Box textAlign="center">
                  <Button
                    color="primary"
                    onClick={() => setMode(MODE.LOGIN)}
                    className={classes.font_text}
                  >
                    Bạn đã có tài khoản
                  </Button>
                </Box>
              </>
            )}

            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose} />

                <Box textAlign="center">
                  <Button
                    color="primary"
                    onClick={() => setMode(MODE.REGISTER)}
                    className={classes.font_text}
                  >
                    Bạn chưa có tài khoản
                  </Button>
                </Box>
              </>
            )}
            {mode === MODE.FORGET && (
              <>
                <Forget closeDialog={handleClose} />
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Header;
