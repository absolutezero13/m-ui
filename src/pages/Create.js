import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import AdbIcon from "@material-ui/icons/Adb";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { TramOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles({
  btn: {
    fontSize: 16,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },

  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Create = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      setTitleError(true);
    }
    if (!details) {
      setDetailsError(true);
    }
    if (title && details) {
      fetch(" http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title,
          details,
          category,
        }),
      }).then(() => history.push("/"));
      setTitleError(false);
      setDetailsError(false);
    }
  };
  return (
    <Container>
      <Typography
        className={classes.title}
        color="secondary"
        variant="h6"
        component="h2"
      >
        KEKW
      </Typography>

      <form onSubmit={handleSubmit} noValidate autoComplete="true">
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          fullWidth
          color="secondary"
          variant="outlined"
          required
          value={title}
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          className={classes.field}
          label="Details"
          fullWidth
          multiline
          rows={4}
          color="secondary"
          variant="outlined"
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel control={<Radio />} value="work" label="Money" />
            <FormControlLabel control={<Radio />} value="todos" label="Todos" />
            <FormControlLabel
              control={<Radio />}
              value="reminders"
              label="Reminders"
            />
            <FormControlLabel
              control={<Radio />}
              value="school"
              label="School"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          SUBMIT
        </Button>
      </form>

      {/* <AdbIcon color="primary" fontSize="large" />
      <AdbIcon color="seconday" fontSize="small" />
      <AdbIcon color="action" fontSize="large" />
      <AdbIcon color="error" fontSize="large" /> */}
    </Container>
  );
};
export default Create;
