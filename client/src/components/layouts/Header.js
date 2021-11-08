import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <h1 className="h1-text">Welcome to My Blog</h1>
    </MainContainer>
  );
};

export default Header;
const MainContainer = styled.header`
  background: url(../../images/bg.jpg) no-repeat center/cover;
  height: 15rem;
  color: white;
`;
