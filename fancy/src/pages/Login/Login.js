import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../../Firebase";
// import { useStateValue } from "../../Provider/StateProvider";

import images from "../../images";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("/");
    login();
    //   // try {
    //   //   await login(inputs);
    //   //   navigate("/");
    //   // } catch (err) {
    //   //   setErr(err.response.data);
    //   // }
  };

  // const [{ user }, dispatch] = useStateValue();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((useCredential) => {
  //       if (useCredential) {
  //         dispatch({
  //           type: "EMPTY_CART",
  //         });
  //         navigate("/");
  //       }
  //     })
  //     .catch((error) => alert(error.message));
  // };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <img src={images.FancyLogo} alt="" />
          <h3>Connect with friends and the world around you on Fancy.</h3>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Create new account</button>
          </Link>
          <p>
            <b>Create a Page</b> for a celebrity, brand or business.
          </p>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <h5>Forgot password?</h5>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
