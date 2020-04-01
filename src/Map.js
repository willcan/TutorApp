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
import { Link, Route } from "react-router-dom";
import AddPhoto from "./AddPhoto";
import { auth } from "./firebase";

export default function Map(props){
        const [name, setName] = useState("")
        const [school, setSchool] = useState("")
        const [major, setmajor] = useState("")
        const [subject, setSubject] = useState("")
        const [rate, setRate] = useState("")
    return(
        <div style={{display:'flex', justifyContent: 'center'}}>
            <Paper style={{padding: 12, marginTop: 30, width: '100%', maxWidth: 400}}>
                <Typography variant="h5">Map</Typography>
            </Paper>
        </div>
    )

}