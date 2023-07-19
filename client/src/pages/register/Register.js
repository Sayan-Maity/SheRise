import React, { useState } from "react";
import "./Register.css";

import { NavLink, useNavigate } from "react-router-dom";
import Login from "../login/Login";

import Axios from "axios";
import toast from "react-hot-toast";
import SEO from "../../components/SEO";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [university, setUniversity] = useState();
  const [stream, setStream] = useState();
  const [year, setYear] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const [github, setGithub] = useState(null);
  const [profession, setProfession] = useState(null);
  const [country, setCountry] = useState(null);
  const [bio, setBio] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleRegistration = async () => {
    setLoading(true);
    if (
      !email ||
      !firstname ||
      !lastname ||
      !university ||
      !stream ||
      !year ||
      !github ||
      !linkedin ||
      !profession ||
      !country ||
      !bio
    ) {
      toast.error("Please fill all the fields");
      setLoading(false);
    } else {
      //check valid email
      if (!email.includes("@")) {
        toast.error("Please enter a valid email");
        setLoading(false);
        return;
      }
      try {
        //checking if user exists
        const check = await Axios.post(
          `${process.env.REACT_APP_SERVER_URL}/auth/check`,
          {
            email: email,
          }
        );
        if (check.data.status) {
          setLoading(false);
          return toast.error("User already exists");
        }
        const resp = await Axios.post(
          `${process.env.REACT_APP_SERVER_URL}/auth/register`,
          {
            email: email,
            firstname: firstname,
            lastname: lastname,
            university: university,
            stream: stream,
            year: year.toString(),
            github: github,
            linkedin: linkedin,
            bio: bio,
            country: country,
            profession: profession,
          }
        );
        if (resp.status === 201) {
          toast.success("Registration Successful");
          setLoading(false);
          navigate("/login");
        }
      } catch (err) {
        toast.error("Something went wrong");
        setLoading(false);
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="register">
        <SEO dynamicTitle="SheRise | Register" />
        <h1>Register</h1>

        <div className="form_container">
          <form className="main_form">
            <div className="register-name">
              <input
                type="text"
                placeholder="First Name*"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name*"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="Email*"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your University*"
              required
              onChange={(e) => setUniversity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Stream*"
              required
              onChange={(e) => setStream(e.target.value)}
            />
            <input
              type="text"
              placeholder="Passing Year*"
              required
              onChange={(e) => setYear(e.target.value)}
            />
            <input
              type="text"
              placeholder="Country* "
              required
              onChange={(e) => setCountry(e.target.value)}
            />
            <div className="register-social">
              <div className="register-social-upper">
                <input
                  type="text"
                  placeholder="Github ID* "
                  required
                  onChange={(e) => setGithub(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Linkedin ID* "
                  required
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </div>
            </div>
            <textarea
              placeholder="Describe yourself (in 10-15 words)*"
              name=""
              id=""
              cols="30"
              rows="3"
              onChange={(e) => setBio(e.target.value)}
              required
            ></textarea>
            <select
              title="profession"
              name="membership"
              id="membership"
              onChange={(e) => setProfession(e.target.value)}
              required
            >
              <option value="student" selected>
                Student
              </option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full-Stack Developer</option>
              <option value="designer">UI/UX Designer</option>
              <option value="influencer">Influencer</option>
              <option value="content">Content Writer</option>
            </select>
          </form>
          <button onClick={handleRegistration}>
            {loading ? "Please Wait" : "Register"}
          </button>
          <div className="desc">
            <p>Already have an account? </p>
            <NavLink to="/login" key={<Login />} className="link">
              <p>Login*</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
