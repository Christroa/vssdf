import Navbar from "./components/navbar";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <div className="cc">Hero</div>
      </div>
      <div id="services"></div>
    </div>
  );
};

export default Home;
