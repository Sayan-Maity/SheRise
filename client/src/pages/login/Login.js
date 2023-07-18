import React, { useContext, useEffect, useState } from "react";
import "./Login.css";

import { NavLink, useNavigate } from "react-router-dom";
import Register from "../register/Register";
import Axios from "axios";
import { magic } from "../../utils/magic";
import { UserContext } from "../../utils/userContext";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { CommonPageHelmet, DynamicTitleHelmet } from "../../constants/SEO";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //       user && user.issuer && navigate('/main/dashboard');
  //   }, [user, navigate]);

  console.log(process.env.REACT_APP_SERVER_URL);
  const handleLogin = async () => {
    console.log(process.env.REACT_APP_SERVER_URL);
    setLoading(true);
    if (email === "") {
      toast.error("Please provide your email!");
      setLoading(false);
    } else {
      //check valid email
      if (!email.includes("@")) {
        toast.error("Please enter a valid email address!");
        setLoading(false);
        return;
      }
      try {
        //checking if user exists
        const resp = await Axios.post(
          process.env.REACT_APP_SERVER_URL + "/auth/check",
          {
            email: email,
          }
        );
        console.log("User Data =>", resp.data);
        if (!resp.data.status) {
          toast.error("Please register first!");
          setLoading(false);
          return navigate("/register");
        }
        // Trigger Magic link to be sent to user
        let didToken = await magic.auth.loginWithMagicLink({
          email,
        });

        // Validate didToken with server
        try {
          const loginResp = await Axios.post(
            process.env.REACT_APP_SERVER_URL + "/auth/login",
            { email },
            {
              headers: {
                Authorization: "Bearer " + didToken,
              },
            }
          );
          if (loginResp.status === 200) {
            let userMetadata = await magic.user.getInfo();
            setUser(userMetadata);
            Cookies.set("token", didToken);
            navigate("/main/dashboard");
          }
        } catch (err) {
          toast.error("Login attempt failed. Please try again later!");
          setLoading(false);
          console.log(err);
        }
      } catch (err) {
        toast.error("Login attempt failed. Please try again later!");
        setLoading(false);
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className="login">
        <Helmet>
          <title>{DynamicTitleHelmet.LoginPageTitle}</title>
          <meta name="description" content={CommonPageHelmet.description} />
          <meta name="keywords" content={CommonPageHelmet.keywords} />
          <meta property="og:title" content={CommonPageHelmet.ogTitle} />
          <meta
            property="og:description"
            content={CommonPageHelmet.ogDescription}
          />
          <meta property="og:image" content={CommonPageHelmet.ogImage} />
          <meta property="og:url" content={CommonPageHelmet.ogURL} />
          <meta property="og:type" content={CommonPageHelmet.ogType} />
          <meta property="og:site_name" content={CommonPageHelmet.ogSiteName} />
          <meta property="og:locale" content={CommonPageHelmet.ogLocale} />
        </Helmet>
        <h1>Login</h1>

        <div className="form_container">
          <form className="main_form">
            <input
              type="email"
              placeholder="Email*"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <button onClick={handleLogin}>
            {loading ? "Please Wait" : "Log In"}
          </button>
          <div className="desc">
            <p>Not registered yet? </p>
            <p>
              {" "}
              <NavLink to="/register" key={<Register />} className="link">
                <p>Create account*</p>
              </NavLink>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
