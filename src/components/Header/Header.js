import "./Header.scss";
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

function Header({headerOnClick}) {
  const classes = useStyles();
  return (
    <header className="Header">
      <div className="wrapper">
        <div className="left">
          <span>hoe</span>
        </div>   
        <div className="right">
          <span onClick={() => headerOnClick(0)} >Home</span>
          <span onClick={() => headerOnClick(0.9)}>About Me</span>
          <span>Experience</span>
          <span>Projects</span>
          <span>Get In Touch</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
