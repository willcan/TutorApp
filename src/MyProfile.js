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
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link, Route } from "react-router-dom";
import AddPhoto from "./AddPhoto";
import { auth, db } from "./firebase";
import Profile from "./Profile";

export default function AddProfile(props){
    const [name, setName] = useState("")
    const [school, setSchool] = useState("")
    const [major, setMajor] = useState("")
    const [subject, setSubject] = useState("")
    const [rate, setRate] = useState("")
    const [image, setImage] = useState(false)
console.log(props.user.uid)

    useEffect(()=>{db.collection('users').doc(props.user.uid).onSnapshot((snapshot)=>{
            setImage(snapshot.data().image)
            setName(snapshot.data().name)
            setSchool(snapshot.data().school)
            setMajor(snapshot.data().major)
            setSubject(snapshot.data().subject)
            setRate(snapshot.data().rate)
    })}, [])

return(
    <Card>
    <CardActionArea>
      <CardMedia image={image} style={{height: 500}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          School: {school}
        </Typography>
        <Typography style={{marginTop: 6}} variant="body2" color="textSecondary" component="p">
          Major: {major}
          <Typography style={{marginTop: 6}} variant="body2" color="textSecondary" component="p">
          Subject: {subject}
          <Typography style={{marginTop: 6}} variant="body2" color="textSecondary" component="p">
          Hourly Rate: {rate}
        </Typography>
        </Typography>
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="large" color="primary">
        start teaching!
      </Button>
    </CardActions>
  </Card>
);
}