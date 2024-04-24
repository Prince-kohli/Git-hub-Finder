import { Component, Fragment } from "react";
import Spinner from "../leyout/Spinner";
import Repos from "../Repos/Repos";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: propTypes.bool,
    user: propTypes.object.isRequired,
    repos: propTypes.array.isRequired,
    getUser: propTypes.func.isRequired,
    getUserRepos: propTypes.func.isRequired,
  };

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading, repos } = this.props;
    if (loading) return <Spinner />;

    return (
      <div className="container">
        <Fragment>
          <Link to="/" className="button btn btn-secondary">
            {" "}
            Back to Search
          </Link>
          Hireable:{" "}
          {hireable ? (
            <img className="true" src="https://as1.ftcdn.net/v2/jpg/04/07/59/28/1000_F_407592824_CY7idSN99Fcviqr1CEN76Oo9LDGhzEc1.jpg" />
          ) : (
            <img className="true" src="https://as2.ftcdn.net/v2/jpg/03/62/12/69/1000_F_362126987_Amy5JyD0LNbPBxgVYgcO2Nu52liLP3gQ.jpg" />
          )}
          <div className=" container car">
            <div className=" row">
              <div className="col-6  ">
                <img
                  src={avatar_url}
                  alt=""
                  className="round-img"
                  style={{ width: "150px" }}
                ></img>
                <h4>{name}</h4>
                <p>Location : {location}</p>
              </div>

              <div className="col-6">
                {bio && (
                  <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </Fragment>
                )}
                <a href={html_url} className="btn btn-dark my-1">
                  Visit Github Profile
                </a>
                <ul>
                  <li>
                    {login && (
                      <Fragment>
                        <strong>Username:</strong> {login}
                      </Fragment>
                    )}
                  </li>

                  <li>
                    {company && (
                      <Fragment>
                        <strong>company:</strong> {company}
                      </Fragment>
                    )}
                  </li>

                  <li>
                    {blog && (
                      <Fragment>
                        <strong>Website:</strong> {blog}
                      </Fragment>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container bage">
            <div className=" row">
              <div className=" col-3   badge-primary">
                <button type="button" class="btn btn-danger">
                  Followers:{followers}
                </button>
              </div>
              <div className="col-3    badge-primary">
                <button type="button" class="btn btn-success">
                  Following:{following}
                </button>
              </div>
              <div className="col-3    badge-primary">
                <button type="button" class="btn btn-secondary">
                  Public Repos:{public_repos}
                </button>
              </div>
              <div className="col-3">
                <button type="button" class="btn btn-primary">
                  Public Gists:{public_gists}
                </button>
              </div>
            </div>
          </div>
          <Repos repos={repos} />
        </Fragment>
      </div>
    );
  }
}

export default User;
