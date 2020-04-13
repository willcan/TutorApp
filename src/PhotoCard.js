import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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

export default function PhotoCard(props) {
  const [dialog_open, setDialogOpen] = useState(false)
    return (
        <Card>
        <CardActionArea>
          <CardMedia
            style={{height: 140,}}
            image={props.photo.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              My Profile
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"
            school={props.photo.school}>
              
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button variant="outlined" color='primary' style={{marginTop:16}} onClick={()=>{setDialogOpen(true)}}>Edit profile photo</Button>
        <AddPhoto open={dialog_open} onClose={()=>{setDialogOpen(false)}}/>
        </CardActions>
      </Card>
      );
    }