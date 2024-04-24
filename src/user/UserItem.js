import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <>
      <div
        className="container "
        
      >
        <div className="card  ">
          <img src={avatar_url} className="card-img-top" alt=""></img>
          <div className="card-body">
            <h3>{login}</h3>

            <Link to={`/user/${login}`} class="btn btn-dark">
              {" "}
              more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

UserItem.propTypes = {
  user: propTypes.object.isRequired,
};

export default UserItem;
