import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar,Typography , Tabs ,Tab ,styled} from '@material-ui/core';

import { Icon, InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "32%",
}));

const useStyles = makeStyles((theme) => ({
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
 
  colorText: {
    color: '#CFA76E',
    fontFamily: 'Nunito',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
    
  },
  appBar: {
    backgroundColor: '#063970',
  },
  search: {
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  },
  Tab: {
    fontSize: '1.1rem', 
  },
}));

const Navbar= () =>  {
  
  const classes = useStyles();
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div>
      <React.Fragment>
        <AppBar className={classes.appBar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            we<span className={classes.colorText}>Met</span>
          </h1>
          <Search className={classes.search} >
        <InputBase placeholder="search..." />
          </Search>
          <Tabs  sx={{ marginLeft: "auto" }} indicatorColor="secondary" textColor="inherit">
                <Tab className={classes.Tab} label="Main" onClick={() => openInNewTab('http://localhost:3000')} />
                <Tab className={classes.Tab}  label="Sign In" onClick={() => openInNewTab('http://localhost:3000/login')} />
                <Tab className={classes.Tab} label="Home" onClick={() => openInNewTab('http://localhost:3000/groups')} />
          </Tabs>
        </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  )
}

export default Navbar
