import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import AddProfile from "./AddProfile";
import { Link, Route } from "react-router-dom";
import { auth } from "./firebase";

export default function AddPhoto(props){
        
    return(
      <Button variant="outlined" color='primary' style={{marginTop:16}}>Add profile photo</Button>
    )

}
