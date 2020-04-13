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
import PhotoCard from "./PhotoCard";
import { auth, db } from "./firebase";
import Photo from "./Photo";
import Profile from "./Profile";

export default function AddProfile(props){
    const [name, setName] = useState("")
    const [school, setSchool] = useState("")
    const [major, setMajor] = useState("")
    const [subject, setSubject] = useState("")
    const [rate, setRate] = useState("")
    const [dialog_open, setDialogOpen] = useState(false)
console.log(props.user.uid)

    useEffect(()=>{db.collection('users').doc(props.user.uid).onSnapshot((snapshot)=>{
            setName(snapshot.data().name)
            setSchool(snapshot.data().school)
            setMajor(snapshot.data().major)
            setSubject(snapshot.data().subject)
            setRate(snapshot.data().rate)
    })}, [])

return(
    <Card>
      <CardActionArea>
        <CardMedia
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          {school}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          {major}
          <Typography variant="body1" color="textSecondary" component="p">
          {subject}
          <Typography variant="body1" color="textSecondary" component="p">
          {rate}
          </Typography>
          </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
