import { Component } from "react";
import propTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: propTypes.func.isRequired,
    clearUsers: propTypes.func.isRequired,
    showClear: propTypes.bool.isRequired,
    setAlert: propTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <>
        <div>
          <div className="container">
            <form onSubmit={this.onSubmit} className="form">
              <input
                className="searchbox"
                type="text"
                name="text"
                placeholder="Search Users"
                value={this.state.text}
                onChange={this.onChange}
              />
              <br></br>
              <input
                type="submit"
                value="Search"
                className="btn btn-dark btn-block"
              />
            </form>
            {showClear && (
              <button className="btn btn-light btn-block " onClick={clearUsers}>
                {" "}
                Clear Users
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
