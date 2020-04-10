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
import Photo from "./Photo";
import { auth, db } from "./firebase";

export default function AddProfile(props){
        const [name, setName] = useState("")
        const [school, setSchool] = useState("")
        const [major, setmajor] = useState("")
        const [subject, setSubject] = useState("")
        const [rate, setRate] = useState("")

        const handleSave = () => {
            db.collection('users').doc(props.user.uid).set({
                name:name,
                school: school,
                major:major,
                subject:subject,
                rate:rate,
            },{merge:true}).then(()=> {
                    setName("")
                    setSchool("")
                    setmajor("")
                    setSubject("")
                    setRate("")
                    props.push("/App/MyProfile")
            })
        }
    return(
        <div style={{display:'flex', justifyContent: 'center'}}>
            <Paper style={{padding: 12, marginTop: 30, width: '100%', maxWidth: 400}}>
                <Typography variant="h5">My Profile</Typography>
                <Photo/>
                <Typography style={{marginTop:16}}>Name</Typography>
                <TextField fullWidth value={name} onChange={(e)=> setName(e.target.value)}/>
                <Typography style={{marginTop:16}}>What is your school/university?</Typography>
                <TextField fullWidth value={school} onChange={(e)=> setSchool(e.target.value)}/>
                <Typography style={{marginTop:16}}>What is your major?</Typography>
                <TextField fullWidth value={major} onChange={(e)=> setmajor(e.target.value)}/>
                <Typography style={{marginTop:16}}>Which subject do you teach?</Typography>
                <TextField fullWidth value={subject} onChange={(e)=> setSubject(e.target.value)}/>
                <Typography style={{marginTop:16}}>What is your hourly rate?</Typography>
                <TextField fullWidth value={rate} onChange={(e)=> setRate(e.target.value)}/>
                <Button onClick={handleSave} variant="outlined" color='primary' style={{marginTop:16}}>Create Profile</Button>
            </Paper>
        </div>
    )

}