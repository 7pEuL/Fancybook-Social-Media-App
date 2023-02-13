import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Fancy Pigeon</h1>
          <p>Connect with friends and the world around you on Facebook.</p>
          <button>Register</button>
        </div>
        <div className="right">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
