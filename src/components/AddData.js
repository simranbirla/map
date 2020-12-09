import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../Styling/Places.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function TransitionsModal({ open, setOpen, data, setData }) {
  const classes = useStyles();
  const [info, setInfo] = useState({});
  const handleClose = () => {
    setOpen(false);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setData([...data, info]);
  };

  const inputChange = (e, name) => {
    if (name === "Latitude" || name === "Longitude") {
      setInfo({
        ...info,
        [name]: parseFloat(e.target.value) * 1,
        id: data.length + 1,
      });
    }
    setInfo({ ...info, [name]: e.target.value, id: data.length + 1 });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form
              className={classes.root}
              autoComplete="off"
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={onFormSubmit}
            >
              <TextField
                className="standard-basic"
                label="Place"
                required
                onChange={(e) => inputChange(e, "Name")}
              />
              <TextField
                className="standard-basic"
                label="PhotoUrl"
                required
                onChange={(e) => inputChange(e, "image")}
              />
              <input
                className="outlined-basic"
                placeholder="Enter latitude"
                required
                type="number"
                step="any"
                onChange={(e) => inputChange(e, "Latitude")}
              />
              <input
                type="number"
                placeholder="Enter longitude"
                required
                step="any"
                onChange={(e) => inputChange(e, "Longitude")}
              />

              <Button variant="contained" color="primary" type="submit">
                Add Place
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
