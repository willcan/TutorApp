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
import PhotoCard from "./PhotoCard";
import { auth, db } from "./firebase";
import Photo from "./Photo";
import Profile from "./Profile";

export default function AddProfile(props){
    const [name, setName] = useState("")
    const [school, setSchool] = useState("")
    const [major, setmajor] = useState("")
    const [subject, setSubject] = useState("")
    const [rate, setRate] = useState("")
    const [dialog_open, setDialogOpen] = useState(false)

    const handleSave = () => {
        db.collection('users').doc(props.user.uid).collection('profile').add({
            name:name,
            school: school,
            major:major,
            subject:subject,
            rate:rate,
        }).then(()=> {
                setName("")
                setSchool("")
                setmajor("")
                setSubject("")
                setRate("")
        })
    }
return(
    <div style={{display:'flex', justifyContent: 'center'}}>
        <Paper style={{padding: 12, marginTop: 30, width: '100%', maxWidth: 400}}>
        <Photo/>
        </Paper>
    </div>
)

}