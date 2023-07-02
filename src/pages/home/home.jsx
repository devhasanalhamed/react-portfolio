import "./home.scss";
import profile from "../../assets/profile.jpg";

export const Home = () => {
  return (
    <div className="home">
      <div className="details">
        <span className="intro">{`Hello, I'm`}</span>
        <div className="name">
          <div>
            <h1 className="txt">
              GR <br />
              AC
            </h1>
          </div>
          <h1 className="txt lg">E</h1>
          <div className="stack">
            FULL-STACK <b>DEVELOPERS</b>
          </div>
        </div>
      </div>
      <div className="profile-image">
        <img src={profile} alt="profile image" />
      </div>
    </div>
  );
};
