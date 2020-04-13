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
import AddPhoto from "./AddPhoto";
import PhotoCard from "./PhotoCard";
import { Link, Route } from "react-router-dom";
import { auth } from "./firebase";

export default function Photo(props){
    const [dialog_open, setDialogOpen] = useState(false)
    const [photos, setPhotos] = useState([{id:0, name:'Willy', image:'https://images.pexels.com/photos/2951457/pexels-photo-2951457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}])
        
    return(
      <div>
        {photos.map((p)=>{
          return(
            <PhotoCard photo={p}/>
          )
        })}
      </div>
    )

}
