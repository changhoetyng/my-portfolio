import "./Home.scss";
import MyImage from "../../assets/me.png"

function Home() {
  return (
    <div className="home">
      <div className="left">
      <div className="imgContainer" />
     
      </div>
      <div className="right">
        <div className="imgContainer">
        <img src={MyImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
