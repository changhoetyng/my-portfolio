import "./Header.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Person, Mail } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <header className="Header">
      <div className="wrapper">
        <div className="left">
          <span>hoe</span>
        </div>   
        <div className="right">
          <span>Home</span>
          <span>About Me</span>
          <span>Experience</span>
          <span>Projects</span>
          <span>Get In Touch</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
