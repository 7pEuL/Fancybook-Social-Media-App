import images from "../../images";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <img src={images.FancyLogo} alt="" />
          <h3>Connect with friends and the world around you on Fancy.</h3>
          <span>Don't you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <p></p>
        </div>

        <div className="right">
          <h1>Sign Up</h1>
          <form>
            <input type="text" placeholder="User Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <h5>Forgot password?</h5>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
