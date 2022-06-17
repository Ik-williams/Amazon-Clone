import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { auth } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#131921",
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

function Header() {
  const classes = useStyles();

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          className={classes.container}
        >
          <Grid item sm={2}>
            <Link to="/">
              <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              />
            </Link>
          </Grid>
          <Grid item sm={8}>
            <div className="header__search">
              <input className="header__searchInput" type="text" />
              <SearchIcon className="header__searchIcon" />
            </div>
          </Grid>
          <Grid item sm={2}>
            <div className="header__nav">
              <Link to={!user && "/login"}>
                <div onClick={handleAuthenticaton} className="header__option">
                  <span className="header__optionLineOne">
                    Hello {!user ? "Guest" : user.email}
                  </span>
                  <span className="header__optionLineTwo">
                    {user ? "Sign Out" : "Sign In"}
                  </span>
                </div>
              </Link>

              <Link to="/orders">
                <div className="header__option">
                  <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwo">& Orders</span>
                </div>
              </Link>

              <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
              </div>

              <Link to="/checkout">
                <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                  <span className="header__optionLineTwo header__basketCount">
                    {basket?.length}
                  </span>
                </div>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
