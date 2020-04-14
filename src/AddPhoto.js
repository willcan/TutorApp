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
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import { Link, Route } from "react-router-dom";
import { auth, db, storage } from "./firebase";



export default function AddPhoto(props){
        const [dialog_open, setDialogOpen] = useState()
        const [title, setTitle] = useState("")
        const [file, setFile] = useState(null)

        const handleSavePhoto = () => {


          db.collection('users').doc(props.user.uid).collection('photos').add({title: title, image: ""})
};

      const handleFile = (e) => {
        const file = e.target.files[0]
        setFile(file)
        console.log(file)
      }

    return(
      <Dialog
          open = {props.open}
          onClose={props.onClose}
          maxwidth='sm'
          fullwidth
        >
          <DialogTitle>Add a photo</DialogTitle>
          <DialogContent>
            <TextField label="Name" fullwidth={true} value={title} onChange={(e) => {setTitle(e.target.value)} }/>
            <Button variant='contained' style={{marginTop: 20}}>Choose a file</Button>
          </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={props.onClose}>
            Cancel
          </Button>
          <input type="file" onChange={handleFile} />
          <Button color="primary" variant="contained" onClick={handleSavePhoto}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    )

}
