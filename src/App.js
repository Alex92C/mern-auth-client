import React from "react";
import Layout from "./core/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./styles.css";

const App = () => {
  const head = () => (
    <Helmet>
      <meta charSet="utf-8" />
      <title>MERN Stack</title>
      <link rel="canonical" href="https://mern-stack.com" />
    </Helmet>
  );
  return (
    <div className="bg-image-full">
      <Layout>
        {head()}
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="p-5">Full-Stack Authentication App</h1>
          <h2>MERN STACK</h2>
          <div className="flex flex-row mt-5">
            <Link to="/signup">
              <button className="btn btn-primary mr-3 px-5">Signup</button>
            </Link>
            <Link to="/signin">
              <button className="btn btn-primary px-5">Signin</button>
            </Link>
          </div>
          <hr />
          <p className="lead">
            This authentication app uses MERN stack (MongoDB, Express, React,
            Node.js) to allow singn up, sign in, different user roles and uses
            modern JWT authentication methods for the best security.
          </p>
          <h4 className="p2">Try it out</h4>
          <p className="lead">
            Use your personal email to sign up, activate your account and then
            sign in. You can also change your credentials in the database or use
            the forgot password. Additionally, you may use the following
            credentials to test the admin routing. <br />
            <br />
            <strong>
              user: <em>testusersignup01@gmail.com </em>- password: 000000
            </strong>
            <br />
            <br />
            Google and Facebook sign in methods are just for demonstration
            purposes and they are not implemented yet.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default App;
