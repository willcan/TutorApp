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
import { auth } from "./firebase";

export default function AddPhoto(props){
        const [dialog_open, setDialogOpen] = useState()
    return(
      <Dialog
          open = {props.open}
          onClose={props.onClose}
          maxwidth='sm'
          fullwidth
        >
          <DialogTitle>Add a photo</DialogTitle>
          <DialogContent>
            <TextField label="Name" fullwidth/>
            <Button variant='contained' style={{marginTop: 20}}>Choose a file</Button>
          </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={props.onClose}>
            Cancel
          </Button>
          <Button color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    )

}
