import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Title = styled.h2`
	font-size: 1.3rem;
	color: #000;
`

const Home = () => {
  return (
    <React.Fragment>
      <Title>誰に励ましてもらう？</Title>
      <Link to="/shuzo">松岡修造</Link>
    </React.Fragment>
  );
};

export default Home;
