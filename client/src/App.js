import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import axios from "axios";
import AddArticle from "./components/AddArticle";
import Article from "./components/Article";
import EditArticle from "./components/EditArticle";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/articles")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Articles posts={posts} />} />
      <Route
        path="/article/:id"
        render={(props) => <Article {...props} posts={posts} />}
      />
      <Route
        path="/update/:id"
        render={(props) => <EditArticle {...props} posts={posts} />}
      />
      <Route path="/add-article" component={AddArticle} />
    </div>
  );
}

export default App;
