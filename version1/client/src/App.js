import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
    return (
      <div className="container">
        <h1>Send Message</h1>
        <PostCreate />
        <hr />
        <h1>Message History:</h1>
        <PostList />
      </div>
    );
  };
  export default App;
  