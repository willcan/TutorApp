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
import { Link, Route } from "react-router-dom";
import { auth } from "./firebase";

export default function Photo(props){
    const [dialog_open, setDialogOpen] = useState(false)
    const [addprofile, setAddProfile] = useState([{id:0, school:'BYU', major:'Finance', subject:'Math', rate: '$35'}])
        
    return(
      <div>
        {addprofile.map((p)=>{
          return(
            <AddProfile addprofile={p}/>
          )
        })}
      <Button variant="outlined" color='primary' style={{marginTop:16}} onClick={()=>{setDialogOpen(true)}}>Add profile photo</Button>
      <AddPhoto open={dialog_open} onClose={()=>{setDialogOpen(false)}}/>
      </div>
    )

}