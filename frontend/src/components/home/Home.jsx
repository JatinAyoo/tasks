import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">
        Become Organized <br /> 
        </h1>
        <p>
          ... Be Focused and Calm with <br />
          Tasks App. Create Account Now.
        </p>
        <button className="home-btn p-2">
          
          

          <Link
                        className="nav-link active btn-nav p-2"
                        aria-current="page"
                        to="/signup"
                      >
                        Make Todo List
                      </Link>
        
        </button>
      </div>
    </div>
  );
};

export default Home;
