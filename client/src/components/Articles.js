import React, { useState } from "react";
import styled from "styled-components";
import spinner from "../spinning.gif";
import { Link } from "react-router-dom";
import axios from "axios";

const Articles = ({ posts }) => {
  const [article, setArticle] = useState([]);
  const deleteArticle = (id) => {
    axios.delete(`/articles/${id}`).then((res) => alert(res.data));
    setArticle(article.filter((elem) => elem._id !== id));
  };
  return (
    <MainContainer>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {!posts.length ? (
              <img src={spinner} alt="loading...." />
            ) : (
              posts.map((article, key) => (
                <div key={key}>
                  <img
                    src={`/uploads/${article.articleImage}`}
                    alt=""
                    width="300px"
                  />
                  <Link to={{ pathname: `/article/${article._id}` }}>
                    <h3>{article.title}</h3>
                  </Link>
                  <p>{article.article}</p>
                  <span className="badge bg-secondary">
                    {article.authorname}
                  </span>
                  <div className="row my-3">
                    <div className="col-sm-2">
                      <Link
                        to={`/update/${article._id}`}
                        className="btn btn-outline-success"
                      >
                        edit
                      </Link>
                    </div>
                    <div className="col-sm-2">
                      <button
                        onClick={() => deleteArticle(article._id)}
                        className="btn btn-outline-danger"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Articles;
const MainContainer = styled.header`
  margin: 2rem 0;
`;
