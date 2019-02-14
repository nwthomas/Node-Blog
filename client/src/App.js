import React, { Component } from "react";
import "./App.css";
import { UserListContainer } from "./components/UserListContainer";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    posts: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => {
        this.setState({
          ...this.state,
          users: res.data,
          message: res.statusText
        });
      })
      .catch(err =>
        this.setState({
          ...this.state,
          message: err.statusText
        })
      );
  }
  render() {
    return (
      <div className="App">
        <UserListContainer posts={this.state.posts} users={this.state.users} />
      </div>
    );
  }
}

export default App;
