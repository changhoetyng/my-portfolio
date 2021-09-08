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
          <span onClick={() => headerOnClick(1.9)}>Experience</span>
          <span onClick={() => headerOnClick(2.9)}>Projects</span>
          <span onClick={() => headerOnClick(3.9)}>Skills</span>
          <span onClick={() => headerOnClick(4.9)}>Get In Touch</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
