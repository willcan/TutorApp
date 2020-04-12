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
import { auth, db } from "./firebase";

export default function AddProfile(props){
    const [name, setName] = useState("")
    const [school, setSchool] = useState("")
    const [major, setmajor] = useState("")
    const [subject, setSubject] = useState("")
    const [rate, setRate] = useState("")

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
            <Typography variant="h5">My Profile</Typography>
            <AddPhoto style={{marginTop:16}}/>
            <Typography style={{marginTop:16}}>Name</Typography>
            <TextField fullWidth value={name} onChange={(e)=> setName(e.target.value)}/>
            <Typography style={{marginTop:16}}>My school/university</Typography>
            <TextField fullWidth value={school} onChange={(e)=> setSchool(e.target.value)}/>
            <Typography style={{marginTop:16}}>My major</Typography>
            <TextField fullWidth value={major} onChange={(e)=> setmajor(e.target.value)}/>
            <Typography style={{marginTop:16}}>My subject</Typography>
            <TextField fullWidth value={subject} onChange={(e)=> setSubject(e.target.value)}/>
            <Typography style={{marginTop:16}}>My hourly rate</Typography>
            <TextField fullWidth value={rate} onChange={(e)=> setRate(e.target.value)}/>
        </Paper>
    </div>
)

}